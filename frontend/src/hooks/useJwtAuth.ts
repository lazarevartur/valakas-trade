import { useDispatchTyped, useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { logout } from "../store/action/authAction";
import { AccessRouts } from "../config";

interface jwtDecoded extends JwtPayload {
  data?: {
    id?: string;
    access?: number;
  };
}

export default () => {
  const dispatch = useDispatchTyped();
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  let currentDate = new Date();
  let decodedToken = {
    access: AccessRouts.all,
    id: "",
  };
  try {
    decodedToken = jwtDecode(token);
  } catch (e) {
    return { ...decodedToken };
  }
  //let decodedToken: jwtDecoded = jwtDecode(token, { header: true });
  if (decodedToken) {
    // @ts-ignore
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      dispatch(logout());
    } else {
      return {
        // @ts-ignore
        access: decodedToken.data.access,
        // @ts-ignore
        id: decodedToken.data.id,
        // @ts-ignore
        isAdm: decodedToken.data.access === AccessRouts.admin,
      };
    }
  }

  return { ...decodedToken };
};
