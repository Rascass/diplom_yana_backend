import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({ example: 'text', description: 'Заголовок новости' })
  @IsString()
  title: string;

  @IsString()
  @ApiProperty({ example: 'text', description: 'Текст нвоости' })
  content: string;
}
