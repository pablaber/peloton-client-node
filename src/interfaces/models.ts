export interface AverageSummary {
  display_name: string,
  display_unit: string,
  value: number,
  slug: string,
}

export interface Averages {
  average_total_work: null | number,
  average_distance: null | number,
  average_calories: null | number,
  average_avg_power: null | number,
  average_avg_speed: null | number,
  average_avg_cadence: null | number,
  average_avg_resistance: null | number,
  average_effort_score: null | number,
  total_heart_rate_zone_durations: null | number,
}

export interface Summary {
  display_name: string,
  display_unit: string,
  value: number,
  slug: string,
}

export interface Metric {
  display_name: string,
  display_unit: string,
  max_value: number,
  average_value: number,
  values: number[],
  slug: string
}

export interface TargetPerformanceMetrics {
  target_graph_metrics: TargetGraphMetrics[],
  cadence_time_in_range: number,
  resistance_time_in_range: number,
}

export interface TargetGraphMetrics {
  graph_data: GraphData,
  max: number,
  min: number,
  average: number,
  type: string,
}

export interface GraphData {
  upper: number[],
  lower: number[],
  average: number[],
}

export interface Artist {
  artist_id: string,
  artist_name: string,
}

export interface Album {
  id: string,
  image_url: null | string,
  name: string,
}

export interface Song {
  id: string,
  title: string,
  artists: Artist[],
  album: Album,
  cue_time_offset: number,
  start_time_offset: number,
  liked: boolean,
}

export interface Playlist {
  id: string,
  ride_id: string,
  top_artists: Artist[],
  songs: Song[],
  is_top_artists_shown: boolean,
  is_playlist_shown: boolean,
  is_in_class_music_shown: boolean,
  stream_id: string,
  stream_url: null | string,
}

export interface JoinTokens {
  on_demand: string,
}

export interface DefaultAlbumImages {
  default_in_class_image_url: null | string,
  default_class_detail_image_url: null | string,
}

export interface DisabledLeaderboardFilters {
  following: boolean,
  just_me: boolean,
  age_and_gender: boolean,
}

export interface Segment {
  icon_name: string,
  icon_slug: string,
  icon_url: string,
  id: string,
  intensity_in_mets: number,
  length: number,
  metrics_type: string,
  name: string,
  start_time_offset: number,
}

export interface RideSegments {
  segment_list: Segment[],
  segment_category_distribution: Record<string, string>,
  segment_body_focus_distribution: Record<string, string>,
}

export interface WorkoutShareImage {
  fitness_discipline: string,
  image_url: string,
}

export interface Instructor {
  id: string,
  bio: string,
  short_bio: string,
  coach_type: string,
  is_filterable: boolean,
  is_instructor_group: boolean,
  is_visible: boolean,
  list_order: number,
  featured_profile: boolean,
  film_link: string,
  facebook_fan_page: string,
  music_bio: string,
  spotify_playlist_uri: string,
  background: string,
  ordered_q_and_as: string[][],
  instagram_profile: string,
  strava_profile: string,
  twitter_profile: string,
  quote: string,
  username: string,
  name: string,
  first_name: string,
  last_name: string,
  user_id: string,
  life_style_image_url: string,
  bike_instructor_list_display_image_url: null | string,
  web_instructor_list_display_image_url: null | string
  ios_instructor_list_display_image_url: null | string
  about_image_url: null | string
  image_url: null | string
  jumbotron_url: null | string
  jumbotron_url_dark: null | string
  jumbotron_url_ios: null | string
  web_instructor_list_gif_image_url: null | string
  instructor_hero_image_url: null | string
  workout_share_images: WorkoutShareImage[],
  fitness_disciplines: string[],
}

export interface Ride {
  captions?: string[],
  class_type_ids: string[],
  content_format: string,
  content_provider: string,
  description: string,
  difficulty_estimate: number,
  difficulty_level?: null | number,
  difficulty_rating_avg: number,
  difficulty_rating_count: number,
  duration: number,
  equipment_ids?: string[],
  equipment_tags?: string[],
  excluded_platforms?: any[],
  extra_images?: string[],
  fitness_discipline_display_name: string,
  fitness_discipline: string,
  has_closed_captions: boolean,
  has_free_mode: boolean,
  has_pedaling_metrics: boolean,
  home_peloton_id: string,
  id: string,
  image_url: string,
  instructor?: Instructor,
  instructor_id: string,
  is_archived: boolean,
  is_closed_caption_shown: boolean,
  is_explicit: boolean,
  is_favorite?: boolean,
  is_live_in_studio_only: boolean,
  join_tokens: JoinTokens,
  language: string,
  leaderboard_filter_type?: null,
  length: number,
  live_stream_id: string,
  live_stream_url?: null | string,
  location: string,
  metrics: string[],
  origin_locale: string,
  original_air_time: number,
  overall_estimate: number
  overall_rating_avg: number,
  overall_rating_count: number,
  pedaling_duration: number,
  pedaling_end_offset: number,
  pedaling_start_offset: number,
  rating: number,
  ride_type_id: string,
  ride_type_ids: string[],
  sample_vod_stream_url?: null | string,
  scheduled_start_time: number,
  series_id: string,
  sold_out: boolean,
  studio_peloton_id: string,
  title: string,
  total_following_workouts?: number,
  total_in_progress_workouts: number,
  total_ratings: number,
  total_user_workouts?: number,
  total_workouts: number,
  vod_stream_id?: string,
  vod_stream_url?: string,
}

export interface RideType {
  id: string,
  name: string,
  display_name: string,
  fitness_discipline: string,
  is_active: boolean,
  list_order: number,
}

export interface Workout {
  created_at: number
  device_type: string
  end_time: number
  fitbit_id: any
  fitness_discipline: string,
  has_pedaling_metrics: boolean,
  has_leaderboard_metrics: boolean,
  id: string,
  is_total_work_personal_record: boolean,
  metrics_type: string,
  name: string,
  peloton_id: string,
  platform: string,
  start_time: number,
  strava_id: any,
  status: string,
  timezone: string,
  title: any,
  total_work: number,
  user_id: string,
  workout_type: string,
  total_video_watch_time_seconds: number,
  total_video_buffering_seconds: number,
  v2_total_video_watch_time_seconds: number,
  v2_total_video_buffering_seconds: number,
  ride: Ride,
  created: number,
  device_time_created_at: number,
  effort_zones: any
}

export interface SummaryObject {
  [key: string]: number
}

export interface HeartRateZoneDurationsObject {
  heart_rate_z1_duration: number,
  heart_rate_z2_duration: number,
  heart_rate_z3_duration: number,
  heart_rate_z4_duration: number,
  heart_rate_z5_duration: number,
}

export interface WorkoutCountObject {
  name: string,
  slug: string,
  count: number,
  icon_url: string,
}

export interface ContractAgreement {
  contract_type: string,
  contract_id: string,
  contract_created_at: number,
  bike_contract_url: string,
  tread_contract_url: string,
  agreed_at: number,
  contract_display_name: string
}

export interface PairedDevice {
  name: string,
  paired_device_type: string,
  serial_number: string
}

export interface ExternalMusicProvider {
  provider: string,
  status: string,
  email?: string
}

export interface QuickHits {
  quick_hits_enabled: boolean,
  speed_shortcuts?: any,
  incline_shortcuts?: any
}

export interface Relationship {
  me_to_user: string,
  user_to_me: string,
}

export interface Streaks {
  current_weekly: number,
  best_weekly: number,
  start_date_of_current_weekly: number,
}

export interface UserSmall {
  authed_user_follows: false,
  category: string,
  id: string,
  image_url: string,
  is_profile_private: boolean,
  location: string,
  relationship: Relationship[],
  total_followers: number,
  total_following: number,
  total_workouts: number,
  username: string,
}

export interface AchievementTemplate {
  description: string,
  id: string,
  image_url: string,
  name: string,
  slug: string,
}

export interface FtpInfo {
  ftp: number,
  ftp_source?: string,
  ftp_workout_id?: string,
}

export interface Events {
  data: any[],
}