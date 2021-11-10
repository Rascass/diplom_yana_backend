import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class HourseOwnerDto {
  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id лошади' })
  hourse_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id персоны' })
  person_id: number;

  @IsDate()
  @ApiProperty({
    example: 'yy/MM/dd',
    description: 'Дата начала владения лошади',
  })
  startdate: Date;
}
