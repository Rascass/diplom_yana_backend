import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CompetitionHoursesRiderDto {
  @IsNumber()
  @ApiProperty({
    example: '1',
    description: 'Id лошади',
  })
  hourse_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id наездника' })
  rider_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id соревнования' })
  compition_id: number;
}
