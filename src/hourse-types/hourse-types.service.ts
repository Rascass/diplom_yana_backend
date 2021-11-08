import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from './hourse-types.constants';
import { HourseTypesModel } from './hourse-types.model';

@Injectable()
export class HourseTypesService {
  constructor(
    @InjectModel(HourseTypesModel)
    private readonly hourseTypesModel: typeof HourseTypesModel,
  ) {}

  async create(dto: { name: string }) {
    return await this.hourseTypesModel.create(dto);
  }

  async get(id: number) {
    let res = await this.hourseTypesModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: { name: string }) {
    let res = (
      await this.hourseTypesModel.update(
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
    let res = await this.hourseTypesModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
