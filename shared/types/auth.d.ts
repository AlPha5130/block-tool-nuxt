declare module '#auth-utils' {
  interface User {
    username: string
    id: number
  }

  interface UserSession {
    loggedInAt: Date
    lastActiveAt: Date
  }

  interface SecureSessionData {
    token: string
  }
}

export {}
