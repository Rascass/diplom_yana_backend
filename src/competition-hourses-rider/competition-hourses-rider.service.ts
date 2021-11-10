import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from './competition-hourses-rider.constants';
import { CompetitionHoursesRiderModel } from './competition-hourses-rider.model';
import { CompetitionHoursesRiderDto } from './dto/competition-hourses-rider.dto';

@Injectable()
export class CompetitionHoursesRiderService {
  constructor(
    @InjectModel(CompetitionHoursesRiderModel)
    private readonly competitionHoursesRiderModel: typeof CompetitionHoursesRiderModel,
  ) {}

  async create(dto: CompetitionHoursesRiderDto) {
    return await this.competitionHoursesRiderModel.create(dto);
  }

  async get(id: number) {
    let res = await this.competitionHoursesRiderModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CompetitionHoursesRiderDto) {
    let res = (
      await this.competitionHoursesRiderModel.update(
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
    let res = await this.competitionHoursesRiderModel.destroy({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
