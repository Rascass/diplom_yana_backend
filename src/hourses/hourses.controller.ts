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
import { HourseDto } from './dto/hourse.dto';
import { HoursesService } from './hourses.service';

@ApiTags('Лошади')
@Controller('hourses')
export class HoursesController {
  constructor(private readonly hoursesService: HoursesService) {}

  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: HourseDto) {
    return await this.hoursesService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о титуле' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.hoursesService.get(id);
  }

  @ApiOperation({ summary: 'Обновление титула' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: HourseDto,
  ) {
    return await this.hoursesService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление титула' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.hoursesService.delete(id);
  }
}
