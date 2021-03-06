import React from 'react'
import { Switch } from 'react-router-dom'
import { Home, SignIn, SignUp, Browse } from './pages'
import * as ROUTES from './constants/routes'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
  const { user } = useAuthListener()

  return (
    <Switch>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
    </Switch>
  )
}
