import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { CompetitionsService } from './competitions.service';
import { CompetitionsDto } from './dto/competitions.dto';

@Controller('competitions')
export class CompetitionsController {
  constructor(private readonly сompetitionsService: CompetitionsService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: CompetitionsDto) {
    return await this.сompetitionsService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о титуле' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.сompetitionsService.get(id);
  }

  @ApiOperation({ summary: 'Обновление титула' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CompetitionsDto,
  ) {
    return await this.сompetitionsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление титула' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.сompetitionsService.delete(id);
  }
}
