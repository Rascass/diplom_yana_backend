import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @ApiProperty({ example: 'login', description: 'Логин пользователя' })
  login: string;

  @IsString()
  @ApiProperty({ example: '1234', description: 'Пароль пользователя' })
  pass: string;
}
