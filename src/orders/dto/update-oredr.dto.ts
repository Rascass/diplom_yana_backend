import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateOrderDto {
  @IsBoolean()
  @ApiProperty({
    example: 'true',
    description: 'Был ли проезведен обратный звонок',
  })
  feedback: boolean;
}
