import { IsNumber, IsString } from 'class-validator';

export class ClubsDto {
  @IsString()
  name: string;

  @IsNumber()
  head_id: number;
}
