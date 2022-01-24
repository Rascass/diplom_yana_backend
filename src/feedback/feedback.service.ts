import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/feedback.dto';
import { EMPTY_ERROR } from './feedback.constants';
import { FeedbackModel } from './feedback.model';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(FeedbackModel)
    private readonly feedbackModel: typeof FeedbackModel,
  ) {}

  async create(dto: CreateOrderDto) {
    return await this.feedbackModel.create(dto);
  }

  async getAll() {
    let res = await this.feedbackModel.findAll({
      order: [['createdAt', 'DESC']],
    });
    if (res.length === 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }
}
