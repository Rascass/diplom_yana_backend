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
import { TitlesService } from './titles.service';

@ApiTags('Титулы')
@Controller('titles')
export class TitlesController {
  constructor(private readonly titleService: TitlesService) {}

  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: { name: string }) {
    return await this.titleService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о титуле' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.titleService.get(id);
  }

  @ApiOperation({ summary: 'Обновление титула' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: { name: string },
  ) {
    return await this.titleService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление титула' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.titleService.delete(id);
  }
}
