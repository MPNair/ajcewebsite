import axios, { AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// Mock Data
const MOCK_NEWS = [
  {
    _id: '1',
    title: 'Amal Jyothi Wins National Innovation Award',
    body: 'Students from the Computer Science department secured first place in the National Smart India Hackathon for their innovative solution in healthcare technology. The team developed an AI-powered diagnostic tool.',
    author: { name: 'Admin' },
    publishedAt: new Date().toISOString(),
    tags: ['Achievement', 'Innovation']
  },
  {
    _id: '2',
    title: 'Admissions Open for 2026-27 Academic Year',
    body: 'Applications are now invited for B.Tech, M.Tech, and MCA programs. Apply online through our portal or visit the campus for spot admission options.',
    author: { name: 'Admissions Office' },
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    tags: ['Admissions', 'Academics']
  },
  {
    _id: '3',
    title: 'International Conference on Sustainable Energy',
    body: 'The Department of Electrical & Electronics Engineering is hosting an international conference on renewable energy solutions and sustainable development.',
    author: { name: 'EEE Dept' },
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    tags: ['Conference', 'Research']
  },
  {
    _id: '4',
    title: 'New Research Center Inaugurated',
    body: 'A state-of-the-art research facility for Advanced Materials was inaugurated today by the Minister of Education. This center will foster interdisciplinary research.',
    author: { name: 'Research Dean' },
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    tags: ['Research', 'Infrastructure']
  }
]

const MOCK_EVENTS = [
  {
    _id: '1',
    title: 'Azure 2026 - Annual Tech Fest',
    date: new Date(Date.now() + 604800000).toISOString(),
    location: 'Main Auditorium',
    tags: ['Tech Fest', 'Cultural'],
    rsvpCount: 450
  },
  {
    _id: '2',
    title: 'Alumni Meet 2026',
    date: new Date(Date.now() + 1209600000).toISOString(),
    location: 'College Courtyard',
    tags: ['Alumni', 'Networking'],
    rsvpCount: 120
  },
  {
    _id: '3',
    title: 'Workshop on AI & Machine Learning',
    date: new Date(Date.now() + 259200000).toISOString(),
    location: 'Computer Lab 1',
    tags: ['Workshop', 'Academic'],
    rsvpCount: 85
  },
  {
    _id: '4',
    title: 'Sports Day',
    date: new Date(Date.now() + 3000000000).toISOString(),
    location: 'College Stadium',
    tags: ['Sports', 'Extra-curricular'],
    rsvpCount: 200
  }
]

const MOCK_COURSES = [
  {
    _id: '1',
    title: 'Computer Science & Engineering',
    code: 'CSE',
    department: { name: 'Computer Science' },
    credits: 160,
    description: 'A comprehensive program covering software development, AI, and systems engineering.'
  },
  {
    _id: '2',
    title: 'Mechanical Engineering',
    code: 'ME',
    department: { name: 'Mechanical Engineering' },
    credits: 160,
    description: 'Focuses on design, manufacturing, and thermal systems with modern CAD/CAM training.'
  },
  {
    _id: '3',
    title: 'Electronics & Communication',
    code: 'ECE',
    department: { name: 'Electronics' },
    credits: 160,
    description: 'Bridging hardware and communication technologies for the connected world.'
  },
  {
    _id: '4',
    title: 'Civil Engineering',
    code: 'CE',
    department: { name: 'Civil Engineering' },
    credits: 160,
    description: 'Designing the future infrastructure with sustainable and smart city concepts.'
  }
]

const MOCK_PLACEMENTS = [
  {
    _id: '1',
    company: 'Tata Consultancy Services (TCS)',
    role: 'Assistant System Engineer',
    package: 4.2,
    year: 2026,
    student: { name: 'Akhil Mathew' }
  },
  {
    _id: '2',
    company: 'Infosys Limited',
    role: 'Systems Engineer',
    package: 4.5,
    year: 2026,
    student: { name: 'Neha Nair' }
  },
  {
    _id: '3',
    company: 'Wipro Technologies',
    role: 'Project Engineer',
    package: 4.0,
    year: 2026,
    student: { name: 'Arjun K' }
  },
  {
    _id: '4',
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst Trainee',
    package: 4.8,
    year: 2025,
    student: { name: 'Ritika Menon' }
  },
  {
    _id: '5',
    company: 'HCL Technologies',
    role: 'Graduate Engineer Trainee',
    package: 4.3,
    year: 2025,
    student: { name: 'Vishnu S' }
  },
  {
    _id: '6',
    company: 'Accenture India',
    role: 'Associate Software Engineer',
    package: 5.5,
    year: 2025,
    student: { name: 'Megha Joseph' }
  },
  {
    _id: '7',
    company: 'IBM India',
    role: 'Application Developer',
    package: 6.2,
    year: 2024,
    student: { name: 'Rohan Paul' }
  },
  {
    _id: '8',
    company: 'Deloitte',
    role: 'Analyst',
    package: 7.0,
    year: 2024,
    student: { name: 'Anjana Varghese' }
  },
  {
    _id: '9',
    company: 'Microsoft India',
    role: 'Software Engineer',
    package: 18.0,
    year: 2024,
    student: { name: 'Gokul Raj' }
  },
  {
    _id: '10',
    company: 'Amazon Development Center',
    role: 'SDE I',
    package: 22.0,
    year: 2024,
    student: { name: 'Sneha P' }
  }
]

const MOCK_PLACEMENTS_DATA = {
  totalPlacements: 410,
  averagePackage: 6.5,
  highestPackage: 22.0,
  companiesCount: 100,
  placements: MOCK_PLACEMENTS
}

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
    try {
      return await this.api.post('/auth/register', data)
    } catch (e) {
      console.warn("API Error, using mock", e);
      return { data: { message: "Mock registration successful" } }
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.api.post('/auth/login', { email, password })
    } catch (e) {
      console.warn("API Error, using mock", e);
      // Mock login always succeeds for demo
      return {
        data: {
          access_token: 'mock-token-123',
          user: { _id: '1', name: 'Demo User', email, role: 'student' }
        }
      }
    }
  }

  // Courses
  async getCourses() {
    try {
      return await this.api.get('/courses')
    } catch (e) {
      return { data: MOCK_COURSES }
    }
  }

  async getCourse(id: string) {
    try {
      return await this.api.get(`/courses/${id}`)
    } catch (e) {
      const course = MOCK_COURSES.find(c => c._id === id) || MOCK_COURSES[0]
      return { data: course }
    }
  }

  // Events
  async getEvents(queryParams?: { fromDate?: string; toDate?: string }) {
    try {
      return await this.api.get('/events', { params: queryParams })
    } catch (e) {
      return { data: MOCK_EVENTS }
    }
  }

  async getEvent(id: string) {
    try {
      return await this.api.get(`/events/${id}`)
    } catch (e) {
      const event = MOCK_EVENTS.find(e => e._id === id) || MOCK_EVENTS[0]
      return { data: event }
    }
  }

  // News
  async getNews(queryParams?: { page?: number; limit?: number; tags?: string }) {
    try {
      return await this.api.get('/news', { params: queryParams })
    } catch (e) {
      return { data: MOCK_NEWS }
    }
  }

  async getNewsItem(id: string) {
    try {
      return await this.api.get(`/news/${id}`)
    } catch (e) {
      const news = MOCK_NEWS.find(n => n._id === id) || MOCK_NEWS[0]
      return { data: news }
    }
  }

  // Placements
  async getPlacements(queryParams?: { year?: number }) {
    try {
      return await this.api.get('/placements', { params: queryParams })
    } catch (e) {
      const placements = queryParams?.year
        ? MOCK_PLACEMENTS.filter((placement) => placement.year === queryParams.year)
        : MOCK_PLACEMENTS

      return {
        data: {
          ...MOCK_PLACEMENTS_DATA,
          placements
        }
      }
    }
  }

  // Users
  async getUser(id: string) {
    try {
      return await this.api.get(`/users/${id}`)
    } catch (e) {
      return { data: { _id: id, name: 'Mock User', email: 'mock@example.com' } }
    }
  }

  async updateUser(id: string, data: any) {
    return this.api.put(`/users/${id}`, data)
  }

  // Departments
  async getDepartments() {
    try {
      return await this.api.get('/departments')
    } catch (e) {
      return { data: [] }
    }
  }

  async getDepartment(id: string) {
    return this.api.get(`/departments/${id}`)
  }

  // Forum
  async getForumPosts(queryParams?: { page?: number; limit?: number; tags?: string }) {
    try {
      return await this.api.get('/forum', { params: queryParams })
    } catch (e) {
      return { data: [] }
    }
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
