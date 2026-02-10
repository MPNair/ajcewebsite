import axios, { AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

class APIClient {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Add token to requests
    this.api.interceptors.request.use((config) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    })

    // Handle errors
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Token expired, clear storage
          if (typeof window !== 'undefined') {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          }
        }
        return Promise.reject(error)
      }
    )
  }

  // Auth endpoints
  async register(data: { name: string; email: string; password: string; role?: string }) {
    return this.api.post('/auth/register', data)
  }

  async login(email: string, password: string) {
    return this.api.post('/auth/login', { email, password })
  }

  // Courses
  async getCourses() {
    return this.api.get('/courses')
  }

  async getCourse(id: string) {
    return this.api.get(`/courses/${id}`)
  }

  // Events
  async getEvents(queryParams?: { fromDate?: string; toDate?: string }) {
    return this.api.get('/events', { params: queryParams })
  }

  async getEvent(id: string) {
    return this.api.get(`/events/${id}`)
  }

  // News
  async getNews(queryParams?: { page?: number; limit?: number; tags?: string }) {
    return this.api.get('/news', { params: queryParams })
  }

  async getNewsItem(id: string) {
    return this.api.get(`/news/${id}`)
  }

  // Placements
  async getPlacements(queryParams?: { year?: number }) {
    return this.api.get('/placements', { params: queryParams })
  }

  // Users
  async getUser(id: string) {
    return this.api.get(`/users/${id}`)
  }

  async updateUser(id: string, data: any) {
    return this.api.put(`/users/${id}`, data)
  }

  // Departments
  async getDepartments() {
    return this.api.get('/departments')
  }

  async getDepartment(id: string) {
    return this.api.get(`/departments/${id}`)
  }

  // Forum
  async getForumPosts(queryParams?: { page?: number; limit?: number; tags?: string }) {
    return this.api.get('/forum', { params: queryParams })
  }

  async getForumPost(id: string) {
    return this.api.get(`/forum/${id}`)
  }

  async createForumPost(data: { title: string; body: string; tags?: string[] }) {
    return this.api.post('/forum', data)
  }

  async addForumReply(postId: string, body: string) {
    return this.api.post(`/forum/${postId}/replies`, { body })
  }

  // Health check
  async health() {
    return this.api.get('/health')
  }
}

export const apiClient = new APIClient()
