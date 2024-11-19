import "express";

declare global {
  namespace Express {
    interface Response {
      render(view: string, locals?: ViewData.Locals): void;
    }
  }
}
