import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @ApiProperty({ example: 'title', description: 'Заголовок проката' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст проката' })
  content: string;
}
