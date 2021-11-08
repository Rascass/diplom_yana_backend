import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRidersDto } from './dto/rider-create.dto';
import { NOT_FOUND_ERROR } from './riders.constants';
import { RidersModel } from './riders.model';

@Injectable()
export class RidersService {
  constructor(
    @InjectModel(RidersModel)
    private readonly ridersModel: typeof RidersModel,
  ) {}

  async create(dto: CreateRidersDto) {
    return await this.ridersModel.create(dto);
  }

  async get(id: number) {
    let res = await this.ridersModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateRidersDto) {
    let res = (
      await this.ridersModel.update(
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
    const res = await this.ridersModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
