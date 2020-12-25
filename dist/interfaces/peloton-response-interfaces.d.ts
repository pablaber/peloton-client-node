export interface JoinTokens {
    on_demand: string;
}
export interface Ride {
    captions?: string[];
    class_type_ids: string[];
    content_format: string;
    content_provider: string;
    description: string;
    difficulty_estimate: number;
    difficulty_level: any;
    difficulty_rating_avg: number;
    difficulty_rating_count: number;
    duration: number;
    equipment_ids?: any[];
    equipment_tags?: any[];
    excluded_platforms?: any[];
    extra_images: any;
    fitness_discipline_display_name: string;
    fitness_discipline: string;
    has_closed_captions: boolean;
    has_free_mode: boolean;
    has_pedaling_metrics: boolean;
    home_peloton_id: string;
    id: string;
    image_url: string;
    instructor_id: string;
    is_archived: boolean;
    is_closed_caption_shown: boolean;
    is_explicit: boolean;
    is_live_in_studio_only: boolean;
    join_tokens: JoinTokens;
    language: string;
    length: number;
    live_stream_id: string;
    live_stream_url: any;
    location: string;
    metrics: string[];
    origin_locale: string;
    original_air_time: number;
    overall_estimate: number;
    overall_rating_avg: number;
    overall_rating_count: number;
    pedaling_duration: number;
    pedaling_end_offset: number;
    pedaling_start_offset: number;
    rating: number;
    ride_type_id: string;
    ride_type_ids: string[];
    sample_vod_stream_url: any;
    scheduled_start_time: number;
    series_id: string;
    sold_out: boolean;
    studio_peloton_id: string;
    title: string;
    total_in_progress_workouts: number;
    total_ratings: number;
    total_workouts: number;
    vod_stream_id: string;
    vod_stream_url?: string;
}
export interface Workout {
    created_at: number;
    device_type: string;
    end_time: number;
    fitbit_id: any;
    fitness_discipline: string;
    has_pedaling_metrics: boolean;
    has_leaderboard_metrics: boolean;
    id: string;
    is_total_work_personal_record: boolean;
    metrics_type: string;
    name: string;
    peloton_id: string;
    platform: string;
    start_time: number;
    strava_id: any;
    status: string;
    timezone: string;
    title: any;
    total_work: number;
    user_id: string;
    workout_type: string;
    total_video_watch_time_seconds: number;
    total_video_buffering_seconds: number;
    v2_total_video_watch_time_seconds: number;
    v2_total_video_buffering_seconds: number;
    ride: Ride;
    created: number;
    device_time_created_at: number;
    effort_zones: any;
}
export interface SummaryObject {
    [key: string]: number;
}
export interface HeartRateZoneDurationsObject {
    heart_rate_z1_duration: number;
    heart_rate_z2_duration: number;
    heart_rate_z3_duration: number;
    heart_rate_z4_duration: number;
    heart_rate_z5_duration: number;
}
export interface WorkoutCountObject {
    name: string;
    slug: string;
    count: number;
    icon_url: string;
}
export interface ContractAgreement {
    contract_type: string;
    contract_id: string;
    contract_created_at: number;
    bike_contract_url: string;
    tread_contract_url: string;
    agreed_at: number;
    contract_display_name: string;
}
export interface PairedDevice {
    name: string;
    paired_device_type: string;
    serial_number: string;
}
export interface ExternalMusicProvider {
    provider: string;
    status: string;
    email?: string;
}
export interface QuickHits {
    quick_hits_enabled: boolean;
    speed_shortcuts?: any;
    incline_shortcuts?: any;
}
export interface Relationship {
    me_to_user: string;
    user_to_me: string;
}
export interface Streaks {
    current_weekly: number;
    best_weekly: number;
    start_date_of_current_weekly: number;
}
export interface UserSmall {
    authed_user_follows: false;
    category: string;
    id: string;
    image_url: string;
    is_profile_private: boolean;
    location: string;
    relationship: Relationship[];
    total_followers: number;
    total_following: number;
    total_workouts: number;
    username: string;
}
export interface AchievementTemplate {
    description: string;
    id: string;
    image_url: string;
    name: string;
    slug: string;
}
export interface FtpInfo {
    ftp: number;
    ftp_source?: string;
    ftp_workout_id?: string;
}
export interface MeResponse {
    allow_marketing: boolean;
    birthday: number;
    block_explicit: boolean;
    can_charge: boolean;
    contract_agreements: ContractAgreement[];
    created_at: any;
    created_country: string;
    customized_heart_rate_zones: any;
    customized_max_heart_rate: number;
    cycling_ftp: string;
    cycling_ftp_source: string;
    cycling_ftp_workout_id: string;
    cycling_workout_ftp: number;
    default_heart_rate_zones: number[];
    default_max_heart_rate: number;
    email: string;
    estimated_cycling_ftp: number;
    external_music_auth_list: any;
    facebook_access_token: string;
    facebook_id: string;
    first_name: string;
    gender: string;
    hardware_settings?: any;
    has_active_device_subscription: boolean;
    has_active_digital_subscription: boolean;
    has_signed_waiver: boolean;
    height: number;
    id: string;
    image_url?: any;
    instructor_id?: any;
    is_complete_profile: boolean;
    is_demo: boolean;
    is_external_beta_tester: string;
    is_fitbit_authenticated: boolean;
    is_internal_beta_tester: boolean;
    is_profile_private: boolean;
    is_provisional: boolean;
    is_strava_authenticated: boolean;
    last_name: string;
    last_workout_at: number;
    location: string;
    member_groups: any;
    middle_initial: string;
    name: string;
    obfuscated_email: string;
    paired_devices: PairedDevice[];
    phone_number: string;
    quick_hits: QuickHits;
    referral_code: any;
    referrals_made: number;
    subscription_credits: number;
    subscription_credits_used: number;
    total_followers: number;
    total_following: number;
    total_non_pedaling_metric_workouts: number;
    total_pedaling_metric_workouts: number;
    total_pending_followers: number;
    total_workouts: number;
    username: string;
    v1_referrals_made: number;
    weight: number;
    workout_counts: WorkoutCountObject[];
}
export interface UserResponse {
    authed_user_follows: boolean;
    block_explicit: boolean;
    created_at: number;
    id: string;
    image_url: string;
    is_profile_private: boolean;
    is_provisional: boolean;
    last_workout_at?: any;
    location: string;
    relationship: Relationship;
    streaks: Streaks;
    total_followers: number;
    total_following: number;
    total_non_pedaling_metric_workouts: number;
    total_pedaling_metric_workouts: number;
    total_workouts: number;
    username: string;
    workout_counts: WorkoutCountObject[];
}
export interface FollowerFollowingResponse {
    data: UserSmall[];
    limit: number;
    page: number;
    total: number;
    count: number;
    page_count: number;
    show_previous: boolean;
    show_next: boolean;
    sort_by?: string;
}
export interface WorkoutsResponse {
    count: number;
    data: Workout[];
    limit: number;
    next: any;
    page: number;
    page_count: number;
    show_next: boolean;
    show_previous: boolean;
    sort_by: string;
    summary: SummaryObject;
    total: number;
}
export interface WorkoutResponse {
    achievement_templates: AchievementTemplate[];
    average_effort_score?: any;
    created: number;
    created_at: number;
    device_time_created_at: number;
    device_type: string;
    device_type_display_name: string;
    end_time: number;
    fitbit_id?: any;
    fitness_discipline: string;
    ftp_info: FtpInfo[];
    has_leaderboard_metrics: boolean;
    has_pedaling_metrics: boolean;
    id: string;
    is_skip_intro_available: boolean;
    is_total_work_personal_record: boolean;
    leaderboard_rank: boolean;
    metrics_type: string;
    name: string;
    peloton_id: string;
    platform: string;
    ride: Ride;
    start_time: number;
    status: string;
    strava_id?: any;
    timezone: string;
    title?: string;
    total_heart_rate_zone_durations?: any;
    total_leaderboard_users: number;
    total_video_buffering_seconds: number;
    total_video_watch_time_seconds: number;
    total_work: number;
    user_id: string;
    v2_total_video_buffering_seconds: number;
    v2_total_video_watch_time_seconds: number;
    workout_type: string;
}
