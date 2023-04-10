import React from 'react'
import { Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'

import { BackgroundLayout } from 'pages/layouts/BackgroundLayout'
import { NavigationLayout } from 'pages/layouts/NavigationLayout'
import { AdminRouteWrap } from './wrapers/AdminRouteWrap'
import { UserRouteWrap } from './wrapers/UserRouteWrap'

import UnauthorizedPage from 'pages/errors/UnauthorizedPage'
import NotFoundPage from 'pages/errors/NotFoundPage'
import LoginPage from 'pages/auth/LoginPage'
import SingUpPage from 'pages/auth/SingUpPage'

const HomePage = React.lazy(() => import('pages/user/Home'))
const PostsPage = React.lazy(() => import('pages/user/Posts'))
const DevicePage = React.lazy(() => import('pages/admin/DevicePage'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<BackgroundLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SingUpPage />} />
        <Route path="/" element={<NavigationLayout />}>
          <Route
            path="/"
            element={
              <UserRouteWrap>
                <HomePage />
              </UserRouteWrap>
            }
          />
          <Route
            path="posts"
            element={
              <UserRouteWrap>
                <PostsPage />
              </UserRouteWrap>
            }
          />
          <Route
            path="device"
            element={
              <AdminRouteWrap>
                <DevicePage />
              </AdminRouteWrap>
            }
          />
        </Route>
      </Route>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
