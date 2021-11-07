import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthDto } from './dto/auth.dto';
import { UsersModel } from './users.model';
import { genSalt, hash, compare } from 'bcryptjs';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UsersModel) private readonly userModel: typeof UsersModel,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      login: dto.login,
      pass: await hash(dto.pass, salt),
    });
    return newUser.save();
  }

  async findUser(login: string) {
    return this.userModel.findOne({ where: { login } });
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UsersModel, 'login'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new BadRequestException(USER_NOT_FOUND_ERROR);
    }
    const isValidPassword = await compare(password, user.pass);
    if (!isValidPassword) {
      throw new BadRequestException(WRONG_PASSWORD_ERROR);
    }
    return { login: user.login };
  }

  async login(email: string) {
    const payload = { email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
