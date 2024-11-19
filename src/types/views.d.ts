declare namespace ViewData {
    interface User {
        user_id: number;
        user_name: string;
        user_password: string;
        user_email: string;
        user_entity: string;
        user_names: string;
        user_last_name_p: string;
        user_last_name_m: string;
        user_image: string;
        area_id: number;
        user_created_at: Date;
        user_modified_at: Date | null;
        user_group_id: number;
        user_active_session: number;
        user_allowed_session: number;
        user_status: number;
    }
    
    interface Locals {
      user: User[];
      base_url: string;
      logo_url: string;
      fecha: Date;
    }
}