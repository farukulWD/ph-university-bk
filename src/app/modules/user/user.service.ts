import config from '../../config';
import { TStudent } from '../student/student.interface';
import { NewUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // creating user object
  const user: NewUser = {};
  //  if not get password from client side
  user.password = password || (config.default_password as string);
  // set role
  user.role = 'student';
  // generated id
  user.id = '2030100001';
  const result = await User.create(user);
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
