import UsersModel from '../models/usersModel';

class UsersService {
  // Get By Email
  public static getUserByEmail = async (email: string) => UsersModel.findOne({
    where: { email },
  });
}

export default UsersService;
