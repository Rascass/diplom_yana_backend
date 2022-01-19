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
  UseGuards
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { CreateNewsDto } from './dto/hire.dto';
import { HireModel } from './hire.model';
import { HireService } from './hire.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('Прокат')
@Controller('hires')
export class HireController {
  constructor(private readonly hireService: HireService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание новости' })
  @ApiResponse({ status: 201, type: HireModel })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateNewsDto) {
    return await this.hireService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех новостей' })
  @ApiResponse({ status: 200, type: [HireModel] })
  @Get()
  async get() {
    return await this.hireService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Получение новости по ID' })
  @ApiResponse({ status: 200, type: HireModel })
  @Get('/:id')
  async getById(@Param('id', IdValidationPipe) id: number) {
    return await this.hireService.getById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение новости' })
  @ApiResponse({ status: 200, type: HireModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateNewsDto,
  ) {
    return await this.hireService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Удаление новости' })
  @ApiResponse({
    status: 200,
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.hireService.delete(id);
  }
}
