import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from './hourse-types.constants';
import { HourseTypesModel } from './hourse-types.model';

@Injectable()
export class HourseTypesService {
  constructor(
    @InjectModel(HourseTypesModel)
    private readonly titleModel: typeof HourseTypesModel,
  ) {}

  async create(dto: { name: string }) {
    return await this.titleModel.create(dto);
  }

  async get(id: number) {
    let res = await this.titleModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: { name: string }) {
    let res = (
      await this.titleModel.update(
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
    let res = await this.titleModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
