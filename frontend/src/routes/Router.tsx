import React from 'react'
import { Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'

import { BackgroundLayout } from 'pages/layouts/BackgroundLayout'
import { NavigationLayout } from 'pages/layouts/NavigationLayout'
import { AdminRouteWrap } from './wrapers/AdminRouteWrap'
import { UserRouteWrap } from './wrapers/UserRouteWrap'

import UnactivatedPage from 'pages/errors/UnactivatedPage'
import UnauthorizedPage from 'pages/errors/UnauthorizedPage'
import NotFoundPage from 'pages/errors/NotFoundPage'
import LoginPage from 'pages/auth/LoginPage'
import SingUpPage from 'pages/auth/SingUpPage'

const HomePage = React.lazy(() => import('pages/user/HomePage'))
const SettingsPage = React.lazy(() => import('pages/user/Settings'))
const DevicePage = React.lazy(() => import('pages/admin/DevicePage'))
const CustomerPage = React.lazy(() => import('pages/admin/CustomerPage'))
const OperatorPage = React.lazy(() => import('pages/admin/OperatorPage'))
const LocationPage = React.lazy(() => import('pages/admin/LocationPage'))
const UnitPage = React.lazy(() => import('pages/admin/UnitPage'))

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
            path="settings"
            element={
              <UserRouteWrap>
                <SettingsPage />
              </UserRouteWrap>
            }
          />
          <Route
            path="service"
            element={
              <UserRouteWrap>
                <SettingsPage />
              </UserRouteWrap>
            }
          />
          <Route path="tables">
            <Route
              path="device"
              element={
                <AdminRouteWrap>
                  <DevicePage />
                </AdminRouteWrap>
              }
            />
            <Route
              path="operator"
              element={
                <AdminRouteWrap>
                  <OperatorPage />
                </AdminRouteWrap>
              }
            />
            <Route
              path="unit"
              element={
                <AdminRouteWrap>
                  <UnitPage />
                </AdminRouteWrap>
              }
            />
            <Route
              path="customer"
              element={
                <AdminRouteWrap>
                  <CustomerPage />
                </AdminRouteWrap>
              }
            />
            <Route
              path="location"
              element={
                <AdminRouteWrap>
                  <LocationPage />
                </AdminRouteWrap>
              }
            />
          </Route>
        </Route>
      </Route>
      <Route path="/unactivated" element={<UnactivatedPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
