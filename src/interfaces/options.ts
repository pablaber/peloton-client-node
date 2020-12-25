export interface AuthenticateOptions {
  username: string
  password: string
}

export interface FollowerFollowingOptions {
  userId?: string,
  limit?: number,
  page?: number
}

export interface WorkoutOptions {
  workoutId: string,
}

export interface WorkoutPerformanceGraphOptions {
  workoutId: string,
  everyN?: number
}

export interface WorkoutsOptions {
  userId?: string,
  limit?: number,
  page?: number,
  joins?: string,
}
