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
import { CreateOrderDto } from './dto/orders.dto';
import { OrderModel } from './orders.model';
import { OrderService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UpdateOrderDto } from './dto/update-oredr.dto';

@ApiTags('Заказы')
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание заказа' })
  @ApiResponse({ status: 201, type: OrderModel })
  @Post('create')
  async create(@Body() dto: CreateOrderDto) {
    return await this.orderService.create(dto);
  }

  @ApiOperation({ summary: 'Получение всех заказов' })
  @ApiResponse({ status: 200, type: [OrderModel] })
  @UseGuards(JwtAuthGuard)
  @Get()
  async get() {
    return await this.orderService.getAll();
  }

  @ApiOperation({ summary: 'Получение всех заказов' })
  @ApiResponse({ status: 200, type: [OrderModel] })
  @UseGuards(JwtAuthGuard)
  @Get('feedback')
  async getFeedback() {
    return await this.orderService.getFeedback();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение заказа' })
  @ApiResponse({ status: 200, type: OrderModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: UpdateOrderDto,
  ) {
    return await this.orderService.update(id, dto);
  }
}
