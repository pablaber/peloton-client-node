export interface Ride {
    has_closed_captions: Boolean;
    content_provider: String;
    content_format: String;
    description: String;
    difficulty_rating_avg: Number;
    difficulty_rating_count: Number;
    difficulty_level: any;
    duration: Number;
    extra_images: any;
    fitness_discipline: String;
    fitness_discipline_display_name: String;
    has_pedaling_metrics: Boolean;
    home_peloton_id: String;
    id: String;
    image_url: String;
    instructor_id: String;
    is_archived: Boolean;
    is_closed_caption_shown: Boolean;
    is_explicit: Boolean;
    is_live_in_studio_only: Boolean;
    language: String;
    length: Number;
    live_stream_id: String;
    live_stream_url: any;
    location: String;
    metrics: String[];
    origin_locale: String;
    original_air_time: Number;
    overall_rating_avg: Number;
    overall_rating_count: Number;
    pedaling_start_offset: Number;
    pedaling_end_offset: Number;
    pedaling_duration: Number;
    rating: Number;
    ride_type_id: String;
    ride_type_ids: String[];
    sample_vod_stream_url: any;
    scheduled_start_time: Number;
    series_id: String;
    sold_out: Boolean;
    studio_peloton_id: String;
    title: String;
    total_ratings: Number;
    total_in_progress_workouts: Number;
    total_workouts: Number;
    vod_stream_url: String;
    vod_stream_id: String;
    class_type_ids: String[];
    difficulty_estimate: Number;
    overall_estimate: Number;
}
export interface Workout {
    created_at: Number;
    device_type: String;
    end_time: Number;
    fitbit_id: any;
    fitness_discipline: String;
    has_pedaling_metrics: Boolean;
    has_leaderboard_metrics: Boolean;
    id: String;
    is_total_work_personal_record: Boolean;
    metrics_type: String;
    name: String;
    peloton_id: String;
    platform: String;
    start_time: Number;
    strava_id: any;
    status: String;
    timezone: String;
    title: any;
    total_work: Number;
    user_id: String;
    workout_type: String;
    total_video_watch_time_seconds: Number;
    total_video_buffering_seconds: Number;
    v2_total_video_watch_time_seconds: Number;
    v2_total_video_buffering_seconds: Number;
    ride: Ride;
    created: Number;
    device_time_created_at: Number;
    effort_zones: any;
}
export interface SummaryObject {
    [key: string]: Number;
}
export interface HeartRateZoneDurationsObject {
    heart_rate_z1_duration: Number;
    heart_rate_z2_duration: Number;
    heart_rate_z3_duration: Number;
    heart_rate_z4_duration: Number;
    heart_rate_z5_duration: Number;
}
export interface WorkoutsResponse {
    count: Number;
    data: Workout[];
    limit: Number;
    next: any;
    page: Number;
    page_count: Number;
    show_next: Boolean;
    show_previous: Boolean;
    sort_by: String;
    summary: SummaryObject;
    total: Number;
}
export interface MeResponse {
}
