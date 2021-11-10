import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  @ApiProperty({ example: 'login', description: 'Логин пользователя' })
  login: string;

  @IsString()
  @ApiProperty({ example: '1234', description: 'Пароль пользователя' })
  pass: string;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Имя роли' })
  role_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id персоны' })
  person_id: number;
}
