export type TUser = {
  id: string;
  password: string;
  needChangePassword: boolean;
  status: 'in-progress' | 'blocked';
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
};

export type NewUser = {
  password?: string;
  role: string;
  id: string;
};