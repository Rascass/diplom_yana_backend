import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @ApiProperty({ example: 'title', description: 'Заголовок новости' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст нвоости' })
  content: string;
}
