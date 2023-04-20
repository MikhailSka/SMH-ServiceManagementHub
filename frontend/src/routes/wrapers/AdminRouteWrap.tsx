import React from 'react'
import { Navigate } from 'react-router-dom'

import { RootState } from '../../store/store'
import { getAccessToken } from 'config/getAssessToken'
import { isTokenExpired } from 'config/isTokenExpired'
import { useAppSelector } from 'store/hooks'
import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner'

interface AdminWrapProps {
  children: React.ReactNode
}

export const AdminRouteWrap: React.FC<AdminWrapProps> = ({ children }) => {
  const { isAuthenticated, userData } = useAppSelector(
    (state: RootState) => state.user
  )
  const token = getAccessToken();

  if (!isAuthenticated || isTokenExpired(token)) {
    return <Navigate to="/login" />
  }

  if (!userData.active) {
    return <Navigate to="/unactivated" />
  }

  // if (!userData.admin) {
  //   return <Navigate to="/unauthorized" />
  // }

  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  )
}
