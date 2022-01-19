import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNewsDto } from './dto/hire.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './hire.constants';
import { HireModel } from './hire.model';

@Injectable()
export class HireService {
  constructor(
    @InjectModel(HireModel) private readonly hireModel: typeof HireModel,
  ) {}

  async create(dto: CreateNewsDto) {
    return await this.hireModel.create(dto);
  }

  async getAll() {
    let res = await this.hireModel.findAll({ order: [['createdAt', 'DESC']] });
    if (res.length == 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async getById(id: number) {
    let res = await this.hireModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateNewsDto) {
    let res = (
      await this.hireModel.update(
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
    let res = await this.hireModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
