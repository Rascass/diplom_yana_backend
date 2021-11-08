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
import { CreateRidersDto } from './dto/rider-create.dto';
import { RidersService } from './riders.service';

@ApiTags('Наездники')
@Controller('riders')
export class RidersController {
  constructor(private readonly ridersService: RidersService) {}

  @ApiOperation({ summary: 'Создание наездника' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: CreateRidersDto) {
    return await this.ridersService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о наезднике' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.ridersService.get(id);
  }

  @ApiOperation({ summary: 'Обновление наездника' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateRidersDto,
  ) {
    return await this.ridersService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление наезденика' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.ridersService.delete(id);
  }
}
