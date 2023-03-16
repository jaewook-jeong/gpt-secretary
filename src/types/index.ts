export type Role = 'system' | 'user';

export type Message = {
  id: string;
  sendAt: string;
  body: string;
  sender: Role;
};
