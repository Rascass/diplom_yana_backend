import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/orders.dto';
import { UpdateOrderDto } from './dto/update-oredr.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './orders.constants';
import { OrderModel } from './orders.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderModel) private readonly orderModel: typeof OrderModel,
  ) {}

  async create(dto: CreateOrderDto) {
    return await this.orderModel.create(dto);
  }

  async getAll() {
    let res = await this.orderModel.findAll({
      order: [['createdAt', 'DESC']],
      where: { feedback: false },
    });
    if (res.length === 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async update(id: number, dto: UpdateOrderDto) {
    let res = (
      await this.orderModel.update(
        { ...dto },
        { where: { id }, returning: true },
      )
    )[1][0];
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async getFeedback(){
    let res = await this.orderModel.findAll({
      order: [['createdAt', 'DESC']],
      where: { feedback: true },
    });
    if (res.length === 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }
}
