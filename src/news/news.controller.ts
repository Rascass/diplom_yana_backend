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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { CreateNewsDto } from './dto/news-create.dto';
import { NewsModel } from './news.model';
import { NewsService } from './news.service';

@ApiTags('Новости')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание новости' })
  @ApiResponse({ status: 201, type: NewsModel })
  @Post('create')
  async create(@Body() dto: CreateNewsDto) {
    return await this.newsService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех новостей' })
  @ApiResponse({ status: 200, type: [NewsModel] })
  @Get()
  async get() {
    return await this.newsService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Получение новости по ID' })
  @ApiResponse({ status: 200, type: NewsModel })
  @Get('/:id')
  async getById(@Param('id', IdValidationPipe) id: number) {
    return await this.newsService.getById(id);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение новости' })
  @ApiResponse({ status: 200, type: NewsModel })
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateNewsDto,
  ) {
    return await this.newsService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Удаление новости' })
  @ApiResponse({
    status: 200,
  })
  @Delete('/:id')
  async delete(@Param('id', IdValidationPipe) id: number) {
    return await this.newsService.delete(id);
  }
}
