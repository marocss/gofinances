import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

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
  signInWithGoogle(): Promise<void>
}

interface GoogleAuthSessionResponse {
  authentication: string | null;
  errorCode: string | null;
  params: {
    access_token: string;
    authuser: string;
    expires_in: string;
    prompt: string;
    scope: string;
    token_type: string;
  },
  type: string;
  url: string;
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)

  const signInWithGoogle = async () => {
    try {
      const authBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth?'
      const userInfoBaseUrl = 'https://www.googleapis.com/oauth2/v1/userinfo?'

      const response_type = 'token'
      const scope = encodeURI('profile email')

      const authUrl = `${authBaseUrl}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${response_type}&scope=${scope}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as GoogleAuthSessionResponse

      if (type === 'success') {
        const response = await fetch(`${userInfoBaseUrl}alt=json&access_token=${params.access_token}`)
        const user = await response.json()

        console.log(user);
        
        setUser({
          id: user.id,
          email: user.email,
          name: user.name,
          photo: user.photo,
        })
      }

    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
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