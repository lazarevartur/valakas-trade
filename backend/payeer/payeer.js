import { Money } from "ts-money";
import { stringify } from "querystring";
import { base64encode, md5, AES256CBC, sha256 } from "./crypto.js";

class Payeer {
  constructor(config) {
    this.config = config;
  }

  generatePaymentPageUrl(orderId, price) {
    // $iv = substr(hash('sha256', $key), 0, 16);
    // $m_params = urlencode(base64_encode(openssl_encrypt(json_encode($arParams),
      //'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv)));
    const { shopId, secretKey, callbackUrls, secretKeyAdditionalParms } = this.config;
    const description = base64encode(`Order ID: ${orderId}`);
    const amount = price.toDecimal().toFixed(2);
    const hash = [shopId, orderId, amount, price.currency, description];
    const key = md5(secretKey + orderId);
    const urls = JSON.stringify(callbackUrls);
    const params = encodeURIComponent(AES256CBC(urls, key));
    hash.push(params, secretKey);
    const sign = sha256(hash.join(":")).toUpperCase();

    const queryParams = {
      m_shop: shopId,
      m_orderid: String(orderId),
      m_amount: amount,
      m_curr: price.currency,
      m_desc: description,
      m_sign: sign,
      m_params: params,
      m_process: "send",
    };
    return `https://payeer.com/merchant/?${stringify(queryParams)}`;
  }

  parsePaymentCallback(body) {
    const callbackHash = [
      body["m_operation_id"],
      body["m_operation_ps"],
      body["m_operation_date"],
      body["m_operation_pay_date"],
      body["m_shop"],
      body["m_orderid"],
      body["m_amount"],
      body["m_curr"],
      body["m_desc"],
      body["m_status"],
      this.config.secretKey,
    ];

    const validSign = sha256(callbackHash.join(":")).toUpperCase();
    const isSignValid = body["m_sign"] === validSign;
    const isPaymentSuccess = isSignValid && body["m_status"] === "success";
    const amountPaid = isPaymentSuccess
      ? Money.fromDecimal(body["m_amount"], body["m_curr"])
      : new Money(0, "USD");

    return {
      isPaymentSuccess,
      orderId: body["m_orderid"],
      amountPaid,
    };
  }
}

export const payeer = new Payeer({
  shopId: process.env.PAYEER_SHOP_ID,
  secretKey: process.env.PAYEER_SECRET_KEY,
  callbackUrls: {
    success_url: "https://www.mirax.tech/payment/success",
    fail_url: "https://www.mirax.tech/payment/fail",
    status_url: "https://www.mirax.tech/payment/status",
  },
});
