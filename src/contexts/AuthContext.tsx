import { createContext, useContext, useState, ReactNode } from 'react'
import { Role } from '../types'

interface AuthContextType {
  role: Role
  setRole: (role: Role) => void
  isMember: boolean
  isLeader: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('Leader') // Default to Leader for testing

  const isMember = role === 'Member'
  const isLeader = role === 'Leader'
  const isAdmin = role === 'Admin'

  return (
    <AuthContext.Provider value={{ role, setRole, isMember, isLeader, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
