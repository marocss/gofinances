import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  signOut(): Promise<void>;
  isLoading: boolean;
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

const userCollectionKey = '@gofinances:user'

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const signInWithApple = async () => {
    try {
      setIsLoading(true)

      const appleAuthCredential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      });

      if (appleAuthCredential) {
        const nameForUrl = appleAuthCredential.fullName!.givenName! + '+' + appleAuthCredential.fullName!.familyName!
        const photoUrl = `https://ui-avatars.com/api/?name=${nameForUrl}&background=random`
        
        const fullName = appleAuthCredential.fullName!.givenName! + ' ' + appleAuthCredential.fullName!.familyName!

        const user = {
          id: (appleAuthCredential.user),
          email: appleAuthCredential.email!,
          name: fullName,
          photo: photoUrl,
        }

        setIsLoading(false)
        setUser(user)
        await AsyncStorage.setItem(userCollectionKey, JSON.stringify(user))
      }

    } catch (error) {
      setIsLoading(false)
      throw new Error(JSON.stringify(error))
    }
  }

  const signInWithGoogle = async () => {
    try {
      const authBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth?'
      const userInfoBaseUrl = 'https://www.googleapis.com/oauth2/v1/userinfo?'

      const response_type = 'token'
      const scope = encodeURI('profile email')

      setIsLoading(true)

      const authUrl = `${authBaseUrl}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${response_type}&scope=${scope}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as GoogleAuthSessionResponse

      if (type === 'success') {
        const response = await fetch(`${userInfoBaseUrl}alt=json&access_token=${params.access_token}`)
        let responseJson = await response.json()

        const user = {
          id: responseJson.id,
          email: responseJson.email,
          name: responseJson.name,
          photo: responseJson.picture,
        }

        setIsLoading(false)

        setUser(user)
        await AsyncStorage.setItem(userCollectionKey, JSON.stringify(user))
      }

    } catch (error) {
      setIsLoading(false)
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      throw new Error(JSON.stringify(error));
    }
  }

  const signOut = async () => {
    setIsLoading(true)

    setUser({} as User)
    await AsyncStorage.removeItem(userCollectionKey)

    setIsLoading(false)
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      const user = await AsyncStorage.getItem(userCollectionKey)
      if (user) {
        const userJson = JSON.parse(user)

        setUser(userJson)
      }

      setIsLoading(false)
    })()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple, signOut, isLoading }}>
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