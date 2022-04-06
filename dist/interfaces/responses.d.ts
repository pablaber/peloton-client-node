import { AchievementTemplate, Averages, AverageSummary, ContractAgreement, DefaultAlbumImages, DisabledLeaderboardFilters, Events, FtpInfo, JoinTokens, Metric, PairedDevice, Playlist, QuickHits, Relationship, Ride, RideSegments, RideType, Segment, Streaks, Summary, SummaryObject, TargetPerformanceMetrics, UserSmall, Workout, WorkoutCountObject, WorkoutShareImage } from './models';
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
export interface RideDetailsResponse {
    ride: Ride;
    playlist: Playlist;
    averages: Averages;
    segments: RideSegments;
    default_album_images: DefaultAlbumImages;
    excluded_platforms: string[];
    is_ftp_test: boolean;
    disabled_leaderboard_filters: DisabledLeaderboardFilters;
    sampled_top_tags: null | string[];
    instructor_cues: any[];
    target_class_metrics: any;
    events: Events;
}
export interface RideResponse {
    captions: string[];
    class_type_ids: string[];
    content_format: string;
    content_provider: string;
    description: string;
    difficulty_estimate: number;
    difficulty_level?: any;
    difficulty_rating_avg: number;
    difficulty_rating_count: number;
    duration: number;
    equipment_ids: string[];
    equipment_tags: string[];
    extra_images: string[];
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
    is_favorite: boolean;
    is_live_in_studio_only: boolean;
    join_tokens: JoinTokens;
    language: string;
    length: number;
    live_stream_id: string;
    live_stream_url: null | string;
    location: string;
    metrics: string[];
    origin_locale: string;
    original_air_time: string;
    overall_estimate: number;
    overall_rating_avg: string;
    overall_rating_count: string;
    pedaling_duration: string;
    pedaling_end_offset: string;
    pedaling_start_offset: string;
    rating: string;
    ride_type_id: string;
    ride_type_ids: string[];
    ride_types: RideType[];
    sample_vod_stream_url: null | string;
    scheduled_start_time: number;
    series_id: string;
    sold_out: boolean;
    studio_peloton_id: string;
    title: string;
    total_following_workouts: number;
    total_in_progress_workouts: number;
    total_ratings: number;
    total_user_workouts: number;
    total_workouts: number;
    vod_stream_id: string;
    vod_stream_url: string;
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
export interface InstructorResponse {
    id: string;
    bio: string;
    short_bio: string;
    coach_type: string;
    is_filterable: boolean;
    is_instructor_group: boolean;
    is_visible: boolean;
    list_order: number;
    featured_profile: boolean;
    film_link: string;
    facebook_fan_page: string;
    music_bio: string;
    spotify_playlist_uri: string;
    background: string;
    ordered_q_and_as: string[][];
    instagram_profile: string;
    strava_profile: string;
    twitter_profile: string;
    quote: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    user_id: string;
    life_style_image_url: string;
    bike_instructor_list_display_image_url: null | string;
    web_instructor_list_display_image_url: null | string;
    ios_instructor_list_display_image_url: null | string;
    about_image_url: null | string;
    image_url: null | string;
    jumbotron_url: null | string;
    jumbotron_url_dark: null | string;
    jumbotron_url_ios: null | string;
    web_instructor_list_gif_image_url: null | string;
    instructor_hero_image_url: null | string;
    workout_share_images: WorkoutShareImage[];
    fitness_disciplines: string[];
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
export interface WorkoutPerformanceGraphResponse {
    duration: number;
    in_class_plan_shown: boolean;
    segment_list: Segment[];
    seconds_since_pedaling_start: number[];
    average_summaries: AverageSummary[];
    summaries: Summary[];
    metrics: Metric[];
    has_apple_watch_metrics: boolean;
    splits_data?: any;
    target_performance_metrics: TargetPerformanceMetrics;
    effort_zones?: any;
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
