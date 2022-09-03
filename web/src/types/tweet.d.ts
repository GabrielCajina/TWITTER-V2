import { User } from "./user";

export interface Tweet {
  id: string;
  title: string;
  description: string;
  url?: string;
  user: User;
}
