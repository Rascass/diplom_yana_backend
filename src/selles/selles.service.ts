import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSellDto } from './dto/selles.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './selles.constants';
import { SellModel } from './selles.model';

@Injectable()
export class SellService {
  constructor(
    @InjectModel(SellModel) private readonly sellModel: typeof SellModel,
  ) {}

  async create(dto: CreateSellDto) {
    return await this.sellModel.create(dto);
  }

  async getAll() {
    let res = await this.sellModel.findAll({ order: [['createdAt', 'DESC']] });
    if (res.length == 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async getById(id: number) {
    let res = await this.sellModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateSellDto) {
    let res = (
      await this.sellModel.update(
        { ...dto },
        { where: { id }, returning: true },
      )
    )[1][0];
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async delete(id: number) {
    let res = await this.sellModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
