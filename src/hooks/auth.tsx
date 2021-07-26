import React, { createContext, useContext, useState, ReactNode } from 'react'
import * as AuthSession from 'expo-auth-session'
import { discordAuth } from '../configs/discordAuth'
import { api } from '../services/api'

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
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
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

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${cdn_image}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({ ...userInfo.data, firstName, token: params.access_token })
        console.log(userInfo)

        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch {
      throw new Error('Não foi possível autenticar.')
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }