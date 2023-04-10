import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner/LoadingSpinner'

interface UserWrapProps {
  children: React.ReactNode
}

export const UserRouteWrap: React.FC<UserWrapProps> = ({ children }) => {
  const { isAuthenticated , userData} = useSelector(
    (state: RootState) => state.auth
  )
  console.log(userData.role)
  console.log(userData.email)
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  )
}
