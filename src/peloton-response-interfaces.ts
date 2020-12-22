export interface Ride {
  has_closed_captions: Boolean,
  content_provider: String,
  content_format: String,
  description: String,
  difficulty_rating_avg: Number,
  difficulty_rating_count: Number,
  difficulty_level: any,
  duration: Number,
  extra_images: any,
  fitness_discipline: String,
  fitness_discipline_display_name: String,
  has_pedaling_metrics: Boolean,
  home_peloton_id: String,
  id: String,
  image_url: String,
  instructor_id: String,
  is_archived: Boolean,
  is_closed_caption_shown: Boolean,
  is_explicit: Boolean,
  is_live_in_studio_only: Boolean,
  language: String,
  length: Number,
  live_stream_id: String,
  live_stream_url: any,
  location: String,
  metrics: String[],
  origin_locale: String,
  original_air_time: Number,
  overall_rating_avg: Number,
  overall_rating_count: Number,
  pedaling_start_offset: Number,
  pedaling_end_offset: Number,
  pedaling_duration: Number,
  rating: Number,
  ride_type_id: String,
  ride_type_ids: String[]
  sample_vod_stream_url: any,
  scheduled_start_time: Number,
  series_id: String,
  sold_out: Boolean,
  studio_peloton_id: String,
  title: String,
  total_ratings: Number,
  total_in_progress_workouts: Number,
  total_workouts: Number,
  vod_stream_url: String,
  vod_stream_id: String,
  class_type_ids: String[],
  difficulty_estimate: Number,
  overall_estimate: Number
};

export interface Workout {
  created_at: Number
  device_type: String
  end_time: Number
  fitbit_id: any
  fitness_discipline: String,
  has_pedaling_metrics: Boolean,
  has_leaderboard_metrics: Boolean,
  id: String,
  is_total_work_personal_record: Boolean,
  metrics_type: String,
  name: String,
  peloton_id: String,
  platform: String,
  start_time: Number,
  strava_id: any,
  status: String,
  timezone: String,
  title: any,
  total_work: Number,
  user_id: String,
  workout_type: String,
  total_video_watch_time_seconds: Number,
  total_video_buffering_seconds: Number,
  v2_total_video_watch_time_seconds: Number,
  v2_total_video_buffering_seconds: Number,
  ride: Ride,
  created: Number,
  device_time_created_at: Number,
  effort_zones: any
}

export interface SummaryObject {
  [key: string]: Number
}

export interface HeartRateZoneDurationsObject {
  heart_rate_z1_duration: Number,
  heart_rate_z2_duration: Number,
  heart_rate_z3_duration: Number,
  heart_rate_z4_duration: Number,
  heart_rate_z5_duration: Number,
}

export interface WorkoutCountObject {
  name: String,
  slug: String,
  count: Number,
  icon_url: String,
}

export interface ContractAgreement {
  contract_type: String,
  contract_id: String,
  contract_created_at: Number,
  bike_contract_url: String,
  tread_contract_url: String,
  agreed_at: Number,
  contract_display_name: String
}

export interface PairedDevice {
  name: String,
  paired_device_type: String,
  serial_number: String
}

export interface ExternalMusicProvider {
  provider: String,
  status: String,
  email?: String
}

export interface QuickHits {
  quick_hits_enabled: Boolean,
  speed_shortcuts?: any,
  incline_shortcuts?: any
}

export interface Relationship {
  me_to_user: String,
  user_to_me: String,
}

export interface Streaks {
  current_weekly: Number,
  best_weekly: Number,
  start_date_of_current_weekly: Number,
}

export interface WorkoutsResponse {
  count: Number,
  data: Workout[],
  limit: Number,
  next: any,
  page: Number,
  page_count: Number,
  show_next: Boolean,
  show_previous: Boolean,
  sort_by: String,
  summary: SummaryObject,
  total: Number,
}

export interface MeResponse {
  allow_marketing: Boolean,
  birthday: Number,
  block_explicit: Boolean,
  can_charge: Boolean,
  contract_agreements: ContractAgreement[],
  created_at: any,
  created_country: String,
  customized_heart_rate_zones: any,
  customized_max_heart_rate: Number,
  cycling_ftp: String,
  cycling_ftp_source: String,
  cycling_ftp_workout_id: String,
  cycling_workout_ftp: Number,
  default_heart_rate_zones: Number[],
  default_max_heart_rate: Number,
  email: String,
  estimated_cycling_ftp: Number,
  external_music_auth_list: any,
  facebook_access_token: String,
  facebook_id: String,
  first_name: String,
  gender: String,
  hardware_settings?: any,
  has_active_device_subscription: Boolean,
  has_active_digital_subscription: Boolean,
  has_signed_waiver: Boolean,
  height: Number,
  id: String,
  image_url?: any,
  instructor_id?: any,
  is_complete_profile: Boolean,
  is_demo: Boolean,
  is_external_beta_tester: String,
  is_fitbit_authenticated: Boolean,
  is_internal_beta_tester: Boolean,
  is_profile_private: Boolean,
  is_provisional: Boolean,
  is_strava_authenticated: Boolean,
  last_name: String,
  last_workout_at: Number,
  location: String,
  member_groups: any,
  middle_initial: String,
  name: String,
  obfuscated_email: String,
  paired_devices: PairedDevice[],
  phone_number: String,
  quick_hits: QuickHits,
  referral_code: any,
  referrals_made: Number,
  subscription_credits: Number,
  subscription_credits_used: Number,
  total_followers: Number,
  total_following: Number,
  total_non_pedaling_metric_workouts: Number,
  total_pedaling_metric_workouts: Number,
  total_pending_followers: Number,
  total_workouts: Number,
  username: String,
  v1_referrals_made: Number,
  weight: Number,
  workout_counts: WorkoutCountObject[],
}

export interface UserResponse {
  authed_user_follows: Boolean,
  block_explicit: Boolean,
  created_at: Number,
  id: String,
  image_url: String,
  is_profile_private: Boolean,
  is_provisional: Boolean,
  last_workout_at?: any,
  location: String,
  relationship: Relationship,
  streaks: Streaks,
  total_followers: Number,
  total_following: Number,
  total_non_pedaling_metric_workouts: Number,
  total_pedaling_metric_workouts: Number,
  total_workouts: Number,
  username: String,
  workout_counts: WorkoutCountObject[],
}