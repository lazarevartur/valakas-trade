import React from 'react'
import './App.css'
import { Header } from '../component/header'
import { Switch } from 'react-router-dom'
import { routesConfig } from '../routes/routesConfig'
import { PrivateRoute } from '../routes/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routesConfig.map((route) => (
          <PrivateRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            access={route.access}
          />
        ))}
      </Switch>
    </div>
  )
}

export default App
