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
import { CreateSellDto } from './dto/selles.dto';
import { SellModel } from './selles.model';
import { SellService } from './selles.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('Объявления')
@Controller('selles')
export class SellesController {
  constructor(private readonly sellService: SellService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание объявления' })
  @ApiResponse({ status: 201, type: SellModel })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateSellDto) {
    return await this.sellService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех объявлений' })
  @ApiResponse({ status: 200, type: [SellModel] })
  @Get()
  async get() {
    return await this.sellService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Получение объявления по ID' })
  @ApiResponse({ status: 200, type: SellModel })
  @Get('/:id')
  async getById(@Param('id', IdValidationPipe) id: number) {
    return await this.sellService.getById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение объявления' })
  @ApiResponse({ status: 200, type: SellModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateSellDto,
  ) {
    return await this.sellService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Удаление объявления' })
  @ApiResponse({
    status: 200,
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.sellService.delete(id);
  }
}
