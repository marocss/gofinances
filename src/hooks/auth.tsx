import React, { createContext, ReactNode, useContext } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextProps {
  user: User;
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: '0',
    name: 'Marcos Roberto Leite Junior',
    email: 'marcos@email.com'
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const authContext = useContext(AuthContext)

  return authContext
}

export {
  AuthProvider,
  useAuth
}