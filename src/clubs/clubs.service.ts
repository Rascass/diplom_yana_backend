import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from './clubs.constants';
import { ClubsModel } from './clubs.model';
import { ClubsDto } from './dto/clubs.dto';

@Injectable()
export class ClubsService {
  constructor(
    @InjectModel(ClubsModel)
    private readonly clubsModel: typeof ClubsModel,
  ) {}

  async create(dto: ClubsDto) {
    return await this.clubsModel.create(dto);
  }

  async get(id: number) {
    let res = await this.clubsModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: ClubsDto) {
    let res = (
      await this.clubsModel.update(
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
    let res = await this.clubsModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
