import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { HourseOwnerDto } from './dto/hourse-owners.dto';
import { HoursesOwnersService } from './hourses-owners.service';

@ApiTags('Владельцы лошадей')
@Controller('hourses-owners')
export class HoursesOwnersController {
  constructor(private readonly hoursesOwnersService: HoursesOwnersService) {}

  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: HourseOwnerDto) {
    return await this.hoursesOwnersService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о титуле' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.hoursesOwnersService.get(id);
  }

  @ApiOperation({ summary: 'Обновление титула' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: HourseOwnerDto,
  ) {
    return await this.hoursesOwnersService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление титула' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.hoursesOwnersService.delete(id);
  }
}
