import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class PersonCreateDto {
  @IsString()
  @ApiProperty({ example: 'Ivan', description: 'Имя персоны' })
  f_name: string;

  @IsString()
  @ApiProperty({ example: 'Ivanov', description: 'Фаилия персоны' })
  s_name: string;

  @IsString()
  @ApiProperty({ example: 'Ivanovich', description: 'Отчество персоны' })
  l_name: string;

  @IsDate()
  @ApiProperty({ example: 'yyyy/MM/dd', description: 'Дата рождения' })
  birthday: Date;
}
