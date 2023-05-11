import React from 'react'
import { Navigate } from 'react-router-dom'

import { RootState } from '../../store/store'
import { useAppSelector } from 'store/hooks'
import { getAccessToken } from 'config/getAssessToken'
import { isTokenExpired } from 'config/isTokenExpired'
import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner'

interface UserWrapProps {
  children: React.ReactNode
}

export const UserRouteWrap: React.FC<UserWrapProps> = ({ children }) => {
  const { isAuthenticated , userData} = useAppSelector(
    (state: RootState) => state.user
  )

  const token = getAccessToken();

  if (!isAuthenticated || isTokenExpired(token)) {
    return <Navigate to="/login" />
  }

  if (!userData.active) {
    return <Navigate to="/unactivated" />
  }
  
  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  )
}
