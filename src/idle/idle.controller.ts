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
import { CreateIdleDto } from './dto/idle.dto';
import { IdleModel } from './idle.model';
import { IdleService } from './idle.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('Простой')
@Controller('idles')
export class IdlesController {
  constructor(private readonly hireService: IdleService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание стойла' })
  @ApiResponse({ status: 201, type: IdleModel })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateIdleDto) {
    return await this.hireService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех стойлов' })
  @ApiResponse({ status: 200, type: [IdleModel] })
  @Get()
  async get() {
    return await this.hireService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Получение стойла по ID' })
  @ApiResponse({ status: 200, type: IdleModel })
  @Get('/:id')
  async getById(@Param('id', IdValidationPipe) id: number) {
    return await this.hireService.getById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение стойла' })
  @ApiResponse({ status: 200, type: IdleModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateIdleDto,
  ) {
    return await this.hireService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Удаление стойла' })
  @ApiResponse({
    status: 200,
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.hireService.delete(id);
  }
}
