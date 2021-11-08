import { IsNumber, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  login: string;

  @IsString()
  pass: string;

  @IsNumber()
  role_id: number;

  @IsNumber()
  person_id: number;
}
