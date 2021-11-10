import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HourseOwnerDto } from './dto/hourse-owners.dto';
import { NOT_FOUND_ERROR } from './hourse-owners.constants';
import { HoursesOwnersModel } from './hourses-owners.model';

@Injectable()
export class HoursesOwnersService {
  constructor(
    @InjectModel(HoursesOwnersModel)
    private readonly hoursesOwnersModel: typeof HoursesOwnersModel,
  ) {}

  async create(dto: HourseOwnerDto) {
    return await this.hoursesOwnersModel.create(dto);
  }

  async get(id: number) {
    let res = await this.hoursesOwnersModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: HourseOwnerDto) {
    let res = (
      await this.hoursesOwnersModel.update(
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
    let res = await this.hoursesOwnersModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
