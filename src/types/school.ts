export interface School {
  school_id: string;
  name_zh: string;
  name_en: string;
  name_ms?: string;
  abbreviation: string;
  founding_year: number;
  school_category: 'traditional_60' | 'branch_campus' | 'conforming_private_kuantan';
  location: {
    state: string;
    city: string;
    address: string;
    postcode?: string;
    latitude?: number;
    longitude?: number;
    google_map_url?: string;
  };
  contact: {
    phone?: string;
    email?: string;
    website_url?: string;
    facebook_url?: string;
  };
  academics: {
    track_type: string; // '单轨制 (纯UEC统考)' | '双轨制 (UEC统考 + SPM政府考试)' | etc.
    secondary_levels: string[];
    senior_tracks: string[];
    academic_highlights?: string;
  };
  costs_and_fees: {
    currency: string;
    registration_fee?: number;
    development_fund_annual?: number;
    tuition_junior_monthly?: number;
    tuition_junior_yearly: number;
    tuition_senior_yearly?: number;
    misc_fee_annual?: number;
    first_year_est_day_student: number;
    first_year_est_boarder?: number;
    scholarship_info?: string;
  };
  dormitory_and_boarding: {
    has_dormitory: boolean;
    dorm_gender?: string;
    dorm_capacity?: number;
    room_types?: string[];
    air_conditioned?: string;
    dorm_fee_monthly?: number;
    meal_plan?: string;
    study_hall_rules?: string;
    electronics_policy?: string;
    first_year_est_boarder?: number;
  };
  admission_intake?: {
    intake_year: number;
    registration_start?: string;
    registration_deadline?: string;
    open_day_dates?: string[];
    entrance_exam_date?: string;
    exam_subjects?: string[];
    exam_format?: string;
    exam_venue?: string;
    admission_mode?: string;
    direct_admission_criteria?: string[]; // 保送与免试直录条件
    result_release_date?: string;
    registration_payment_deadline?: string; // 注册缴费确认截止
    scholarship_quota?: string; // 优异新生奖学金细则
    dorm_application_deadline?: string; // 外州住宿申请截止
  };
  fit_tags: string[];
  verification_status: {
    source_level: string;
    is_verified: boolean;
    last_updated: string;
  };
}
