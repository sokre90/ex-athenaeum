import { Redirect, Switch, Route } from "react-router-dom";
import { routes } from ".";
import { Suspense } from "react";

export const MainRouteSwitch = () => {
  return (
    <Suspense fallback="Loading route...">
      <Switch>
        {routes.map(({ path, exact, component }) => {
          return (
            <Route key={path} exact={exact} path={path} component={component} />
          );
        })}

        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}