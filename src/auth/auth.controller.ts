import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ALREADY_REGISTRED_ERROR } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UserCreateDto } from './dto/users-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: UserCreateDto) {
    const oldUser = await this.authService.findUser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTRED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, pass }: AuthDto) {
    const user = await this.authService.validateUser(login, pass);
    return this.authService.login(user.login);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('validate')
  async validate(@Body() data: any) {
    return await this.authService.validate(data.access_token);
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: UserCreateDto) {
    const user = await this.authService.createUser(dto);
    return user;
  }
}
