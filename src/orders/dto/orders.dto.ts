import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @ApiProperty({ example: 'Иван Иванович Иванов', description: 'ФИО клиента' })
  full_name: string;

  @IsString()
  @ApiProperty({ example: '+375 11 111 11 11', description: 'Номер телефона' })
  number: string;

  @IsString()
  @ApiProperty({
    example: 'http://localhost:5000/api/hires/1',
    description: 'Ссылка на страницу',
  })
  link: string;

  @IsBoolean()
  @ApiProperty({
    example: 'true',
    description: 'Был ли проезведен обратный звонок',
  })
  feedback: boolean;
}
