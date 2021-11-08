import { IsDate, IsNumber, IsString } from 'class-validator';

export class HourseDto {
  @IsString()
  nickname: string;

  @IsNumber()
  club_id: number;

  @IsNumber()
  hourse_type_id: number;

  @IsDate()
  birthday: Date;

  @IsString()
  sex: string;
}
