import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { AccessRouts } from "../config";
import { RoutePath } from "./routesConfig";
import useJwtAuth from "../hooks/useJwtAuth";

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
  // @ts-ignore
  const { access: userRole } = useJwtAuth();
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
