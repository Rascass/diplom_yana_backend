import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CompetitionsModel } from './competitions.model';
import { NOT_FOUND_ERROR } from './copmetitions.constants';
import { CompetitionsDto } from './dto/competitions.dto';

@Injectable()
export class CompetitionsService {
  constructor(
    @InjectModel(CompetitionsModel)
    private readonly competitionsModel: typeof CompetitionsModel,
  ) {}

  async create(dto: CompetitionsDto) {
    return await this.competitionsModel.create(dto);
  }

  async get(id: number) {
    let res = await this.competitionsModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CompetitionsDto) {
    let res = (
      await this.competitionsModel.update(
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
    let res = await this.competitionsModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
