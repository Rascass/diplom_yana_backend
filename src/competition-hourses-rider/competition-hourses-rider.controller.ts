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
import { CompetitionHoursesRiderService } from './competition-hourses-rider.service';
import { CompetitionHoursesRiderDto } from './dto/competition-hourses-rider.dto';

@Controller('competition-hourses-rider')
export class CompetitionHoursesRiderController {
  constructor(
    private readonly competitionHoursesRiderService: CompetitionHoursesRiderService,
  ) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: CompetitionHoursesRiderDto) {
    return await this.competitionHoursesRiderService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о титуле' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.competitionHoursesRiderService.get(id);
  }

  @ApiOperation({ summary: 'Обновление титула' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CompetitionHoursesRiderDto,
  ) {
    return await this.competitionHoursesRiderService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление титула' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.competitionHoursesRiderService.delete(id);
  }
}
