import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { discordAuth } from '../configs/auth'
import { api } from '../services/api'
import { storage } from '../configs/storage'

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function signIn() {
    try {
      setLoading(true)

      const { client_id, redirect_uri, response_type, scope, cdn_image } = discordAuth

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${cdn_image}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(
          storage.collection_users,

          // Tranform value in text to storage
          JSON.stringify(userData)
        )

        setUser(userData)
      }
    } catch {
      throw new Error('Não foi possível autenticar.')
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    setUser({} as User)

    await AsyncStorage.removeItem(storage.collection_users)
  }

  async function loadUserStorageData() {
    const inStorage = await AsyncStorage.getItem(storage.collection_users)

    if (inStorage) {
      // Transform in Object
      const userLogged = JSON.parse(inStorage) as User

      api.defaults.headers.authorization = `Bearer ${userLogged.token}`

      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }