import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIdleDto } from './dto/idle.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './idle.constants';
import { IdleModel } from './idle.model';

@Injectable()
export class IdleService {
  constructor(
    @InjectModel(IdleModel) private readonly idleModel: typeof IdleModel,
  ) {}

  async create(dto: CreateIdleDto) {
    return await this.idleModel.create(dto);
  }

  async getAll() {
    let res = await this.idleModel.findAll({ order: [['createdAt', 'DESC']] });
    if (res.length === 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async getById(id: number) {
    let res = await this.idleModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateIdleDto) {
    let res = (
      await this.idleModel.update(
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
    let res = await this.idleModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
