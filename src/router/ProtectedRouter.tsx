import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRouter: React.FC = () => {
  const { currentUser } = useAuth()
  return currentUser ? <Outlet /> : <Navigate to="/login" />
}
