import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

// egg-mysql
// https://blog.51cto.com/u_15127698/4260012

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
