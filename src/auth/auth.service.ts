import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthDto } from './dto/auth.dto';
import { UsersModel } from './users.model';
import { genSalt, hash, compare } from 'bcryptjs';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';
import { UserCreateDto } from './dto/users-create.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UsersModel) private readonly userModel: typeof UsersModel,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: UserCreateDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      login: dto.login,
      pass: await hash(dto.pass, salt),
      role_id: dto.role_id,
      person_id: dto.person_id,
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
