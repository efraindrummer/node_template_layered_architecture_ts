import "express-session";

declare module "express-session" {
    interface SessionData {
        loged?: boolean;
        user_id?: string; // O el tipo que prefieras para user_id
    }
}
