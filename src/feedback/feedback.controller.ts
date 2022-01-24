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
import { CreateOrderDto } from './dto/feedback.dto';
import { FeedbackModel } from './feedback.model';
import { FeedbackService } from './feedback.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('Отзывы')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание заказа' })
  @ApiResponse({ status: 201, type: FeedbackModel })
  @Post('create')
  async create(@Body() dto: CreateOrderDto) {
    return await this.feedbackService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех заказов' })
  @ApiResponse({ status: 200, type: [FeedbackModel] })
  @UseGuards(JwtAuthGuard)
  @Get()
  async get() {
    return await this.feedbackService.getAll();
  }
}
