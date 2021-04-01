import React from 'react'
import './App.css'
import { Header } from '../component/header'
import { Switch } from 'react-router-dom'
import { routesConfig } from '../routes/routesConfig'
import { ProtectedRoute } from '../routes/ProtectedRoute'
import { Footer } from '../component/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routesConfig.map((route) => (
          <ProtectedRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            access={route.access}
          />
        ))}
      </Switch>
      <Footer />
    </div>
  )
}

export default App
