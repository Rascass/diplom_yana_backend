import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NOT_FOUND_ERROR } from 'src/news/new.constants';
import { RolesModel } from './roles.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RolesModel) private readonly rolesModel: typeof RolesModel,
  ) {}

  async create(dto: { role_name: string }) {
    try {
      return await this.rolesModel.create(dto);
    } catch (e) {
      return {
        statusCode: 400,
        message: new Error(String(e)).toString(),
      };
    }
  }

  async getAll() {
    let res = await this.rolesModel.findAll();
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async get(id: number) {
    let res = await this.rolesModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: { role_name: string }) {
    let res = (
      await this.rolesModel.update(
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
    const res = await this.rolesModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
