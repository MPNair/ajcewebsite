import { create } from 'zustand'
import { apiClient } from './api'

export interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'faculty' | 'admin' | 'alumni'
  department?: string
  profilePhoto?: string
}

interface AuthStore {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  
  // Actions
  register: (data: { name: string; email: string; password: string; role?: string }) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  restoreSession: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  register: async (data) => {
    set({ isLoading: true, error: null })
    try {
      const response = await apiClient.register(data)
      const { token, user } = response.data
      
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      
      set({ token, user: user as User, isLoading: false })
    } catch (err: any) {
      set({ 
        error: err.response?.data?.error?.message || 'Registration failed',
        isLoading: false 
      })
      throw err
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const response = await apiClient.login(email, password)
      const { token, user } = response.data
      
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      
      set({ token, user: user as User, isLoading: false })
    } catch (err: any) {
      set({ 
        error: err.response?.data?.error?.message || 'Login failed',
        isLoading: false 
      })
      throw err
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ user: null, token: null, error: null })
  },

  restoreSession: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      const userStr = localStorage.getItem('user')
      
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr)
          set({ token, user })
        } catch (err) {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      }
    }
  }
}))
