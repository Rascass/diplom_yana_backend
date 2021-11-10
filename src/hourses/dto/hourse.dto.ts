import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class HourseDto {
  @IsString()
  @ApiProperty({ example: 'nickname', description: 'Кличка лошади' })
  nickname: string;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id клуба' })
  club_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id типа лошади' })
  hourse_type_id: number;

  @IsDate()
  @ApiProperty({ example: 'yy/MM/dd', description: 'Дата рождения лошади' })
  birthday: Date;

  @IsString()
  @ApiProperty({ example: 'male', description: 'Пол лошади' })
  sex: string;
}
