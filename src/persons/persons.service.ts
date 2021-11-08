import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from 'src/news/new.constants';
import { PersonCreateDto } from './dto/person-create.dto';
import { PersonsModel } from './persons.model';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel(PersonsModel)
    private readonly personsModel: typeof PersonsModel,
  ) {}

  async create(dto: PersonCreateDto) {
    try {
      return await this.personsModel.create(dto);
    } catch (e) {
      return {
        statusCode: 400,
        message: new Error(String(e)).toString(),
      };
    }
  }

  async get(id: number) {
    let res = await this.personsModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: PersonCreateDto) {
    let res = (
      await this.personsModel.update(
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
    const res = await this.personsModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
