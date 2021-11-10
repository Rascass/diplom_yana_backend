import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CompetitionsDto {
  @IsDate()
  @ApiProperty({
    example: '1995-12-17T03:24:00',
    description: 'Дата и время начала соревнования',
  })
  startdate: Date;

  @IsDate()
  @ApiProperty({ example: 'yy/MM/dd', description: 'Дата окончания' })
  end_date: Date;

  @IsString()
  @ApiProperty({ example: '1000 $', description: 'Призовой фонд' })
  prize_info: string;

  @IsString()
  @ApiProperty({ example: 'yy/MM/dd', description: 'Название соревнования' })
  name: string;

  @IsString()
  @ApiProperty({ example: 'male', description: 'Описание соревнования' })
  description: string;
}
