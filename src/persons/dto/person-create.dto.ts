import { IsDate, IsString } from 'class-validator';

export class PersonCreateDto {
  @IsString()
  f_name: string;

  @IsString()
  s_name: string;

  @IsString()
  l_name: string;

  @IsDate()
  birthday: Date;
}
