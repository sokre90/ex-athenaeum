import { Redirect, Switch, Route } from "react-router-dom";
import { routes } from ".";
import { Suspense } from "react";
import { CircularProgress } from '@mui/material'

export const MainRouteSwitch = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        {routes.map(({ path, exact, component }) => {
          return (
            <Route key={path} exact={exact} path={path} component={component} />
          );
        })}

        <Redirect to="/books" />
      </Switch>
    </Suspense>
  )
}