import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner'

interface UserWrapProps {
  children: React.ReactNode
}

export const UserRouteWrap: React.FC<UserWrapProps> = ({ children }) => {
  const { isAuthenticated , userData} = useSelector(
    (state: RootState) => state.user
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (!userData.active) {
    return <Navigate to="/unactivated" />
  }
  
  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  )
}
