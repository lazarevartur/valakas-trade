import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { USER_REGISTER_REFERRAL_LINK } from "../store/slice/authSlice";
import { RoutePath } from "../routes/routesConfig";
import { useHistory } from "react-router";
import { useDispatchTyped } from "./useTypedRedux";

const UseReferralLink = () => {
  const match: any = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatchTyped();
  useEffect(() => {
    if (match.params.id) {
      dispatch(USER_REGISTER_REFERRAL_LINK(match.params.id));
      history.push(RoutePath.auth);
    }
  }, []);
};

export default UseReferralLink;
