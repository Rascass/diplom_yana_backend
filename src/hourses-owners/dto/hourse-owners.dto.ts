import { IsDate, IsNumber } from 'class-validator';

export class HourseOwnerDto {
  @IsNumber()
  hourse_id: number;

  @IsNumber()
  person_id: number;

  @IsDate()
  startdate: Date;
}
