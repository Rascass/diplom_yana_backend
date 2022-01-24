import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { HourseTypesService } from './hourse-types.service';

@ApiTags('Породы лошадей')
@Controller('hourse-types')
export class HourseTypesController {
  constructor(private readonly hourseTypesService: HourseTypesService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание специализации' })
  @ApiResponse({ status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: { name: string }) {
    return await this.hourseTypesService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации специализаций' })
  @ApiResponse({ status: 201 })
  @Get()
  async getAll() {
    return await this.hourseTypesService.getAll();
  }

  @ApiOperation({ summary: 'Получение информации о специализации' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.hourseTypesService.get(id);
  }

  @ApiOperation({ summary: 'Обновление специализации' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: { name: string },
  ) {
    return await this.hourseTypesService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление специализации' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.hourseTypesService.delete(id);
  }
}
