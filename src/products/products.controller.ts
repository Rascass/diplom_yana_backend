import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { productDto } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Создание наездника' })
  @ApiResponse({ status: 201 })
  @Post('create')
  async create(@Body() dto: productDto) {
    return await this.productsService.create(dto);
  }

  @ApiOperation({ summary: 'Получение информации о наезднике' })
  @ApiResponse({ status: 201 })
  @Get('/:id')
  async get(@Param('id', IdValidationPipe) id: number) {
    return await this.productsService.get(id);
  }

  @ApiOperation({ summary: 'Обновление наездника' })
  @ApiResponse({ status: 201 })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: productDto,
  ) {
    return await this.productsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление наезденика' })
  @ApiResponse({ status: 201 })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.productsService.delete(id);
  }
}
