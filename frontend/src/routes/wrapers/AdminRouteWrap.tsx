import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import LoadingSpinner from 'components/IconsAndAnimations/LoadingSpinner/LoadingSpinner'

interface AdminWrapProps {
  children: React.ReactNode
}

export const AdminRouteWrap: React.FC<AdminWrapProps> = ({ children }) => {
  const { isAuthenticated, userData } = useSelector(
    (state: RootState) => state.auth
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
console.log(userData.role)
console.log(userData.email)
  if (userData.role !== 'admin') {
    return <Navigate to="/unauthorized" />
  }

  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  )
}
