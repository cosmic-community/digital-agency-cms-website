// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  thumbnail?: string;
  published_at?: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    short_description: string;
    full_description?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
    service_category?: {
      key: string;
      value: string;
    };
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    job_title: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    skills?: string[];
    years_experience?: number;
    email?: string;
    linkedin_url?: string;
    department?: {
      key: string;
      value: string;
    };
  };
}

// Case study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    project_overview: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    project_duration?: string;
    technologies_used?: string[];
    team_members?: TeamMember[];
    related_services?: Service[];
    project_url?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_title?: string;
    company_name: string;
    testimonial_text: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    project_type?: {
      key: string;
      value: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime type checking
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Service category type
export type ServiceCategory = 'development' | 'design' | 'marketing' | 'consulting';

// Department type  
export type Department = 'leadership' | 'development' | 'design' | 'marketing' | 'strategy';

// Project type
export type ProjectType = 'web_development' | 'mobile_app' | 'digital_marketing' | 'branding' | 'consulting';

// Rating type
export type Rating = '1' | '2' | '3' | '4' | '5';