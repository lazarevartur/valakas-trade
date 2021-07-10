import React, { Suspense } from "react";
import "./App.css";
import { Header } from "../component/header";
import { Switch } from "react-router-dom";
import { routesConfig } from "../routes/routesConfig";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { Footer } from "../component/mainBlocks/footer";
import { FullScreenLoader } from "../component/uiKit/FullScreenLoader";
import { useDispatchTyped } from "../hooks/useTypedRedux";
import { chekAuth } from "../store/action/authAction";

function App() {
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    // dispatch(chekAuth());
  }, []);
  return (
    <>
      <Header />
      <Suspense fallback={<FullScreenLoader />}>
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
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
