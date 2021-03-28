import React, { ReactNode } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AccessRouts } from '../config'
import { RoutePath } from './routesConfig'

interface PrivateRouteProps {
  children?: ReactNode
  path: string
  exact: boolean
  component: any
  access?: AccessRouts
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  access = AccessRouts.all,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        access ? (
          <Redirect to={RoutePath.registration} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}
