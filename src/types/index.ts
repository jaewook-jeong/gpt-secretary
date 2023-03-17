import { Dayjs } from "dayjs";

export type Role = 'system' | 'user';

export type Message = {
  id: string;
  sendAt: Dayjs;
  body: string;
  sender: Role;
};
