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
import { PersonCreateDto } from './dto/person-create.dto';
import { PersonsService } from './persons.service';

@ApiTags('Персоны')
@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @ApiOperation({ summary: 'Создание персоны' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: PersonCreateDto) {
    return await this.personsService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о персоне' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.personsService.get(id);
  }

  @ApiOperation({ summary: 'Обновление персоны' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: PersonCreateDto,
  ) {
    return await this.personsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление персоны' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.personsService.delete(id);
  }
}
