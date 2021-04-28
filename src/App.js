import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { getCurrentUser } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

//done

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const SignUpView = lazy(() =>
  import('./views/SignUpView' /* webpackChunkName: "home-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "home-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "home-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/signup"
            redirectTo="/contacts"
            restricted
            component={SignUpView}
          />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
