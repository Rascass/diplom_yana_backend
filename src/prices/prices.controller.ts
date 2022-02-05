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
  UseGuards,
  StreamableFile
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { CreatePricesDto } from './dto/price-create.dto';
import { PricesModel } from './prices.model';
import { PriceService } from './prices.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { createReadStream } from 'fs';
import { join } from 'path';

@ApiTags('Прайс-лист')
@Controller('prices')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание прайс-листа' })
  @ApiResponse({ status: 201, type: PricesModel })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreatePricesDto) {
    return await this.priceService.create(dto);
  }

  @ApiOperation({ summary: 'Получение прайс-листа' })
  @ApiResponse({ status: 200, type: [PricesModel] })
  @Get()
  async get() {
    return await this.priceService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение прайс-листа' })
  @ApiResponse({ status: 200, type: PricesModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreatePricesDto,
  ) {
    return await this.priceService.update(id, dto);
  }

  @Get('/price.txt')
  @ApiOperation({ summary: 'Скачивание прайс-листа' })
  @ApiResponse({ status: 200, type: "File" })
  getFile() {
    return this.priceService.get_file();
  }
}
