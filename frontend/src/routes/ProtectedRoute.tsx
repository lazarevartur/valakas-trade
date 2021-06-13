import React, { ReactNode } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AccessRouts } from "../config";
import { useSelectorTyped } from "../hooks/useTypedRedux";
import { rootState } from "../types/types";
import { RoutePath } from "./routesConfig";

interface ProtectedRouteProps {
  children?: ReactNode;
  path: string;
  exact: boolean;
  component: any;
  access: AccessRouts;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  access = AccessRouts.all,
  ...rest
}) => {
  const {
    userData: { access: userRole = AccessRouts.all },
  } = useSelectorTyped((state: rootState) => state.authentication);
  return (
    <Route
      {...rest}
      render={(props) =>
        access <= userRole ? (
          <Component {...props} />
        ) : (
          <Redirect to={RoutePath.home} />
        )
      }
    />
  );
};
