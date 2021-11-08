import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HourseDto } from './dto/hourse.dto';
import { NOT_FOUND_ERROR } from './hourses.constants';
import { HoursesModel } from './hourses.model';

@Injectable()
export class HoursesService {
  constructor(
    @InjectModel(HoursesModel)
    private readonly hoursesModel: typeof HoursesModel,
  ) {}

  async create(dto: HourseDto) {
    return await this.hoursesModel.create(dto);
  }

  async get(id: number) {
    let res = await this.hoursesModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: HourseDto) {
    let res = (
      await this.hoursesModel.update(
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
    let res = await this.hoursesModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
