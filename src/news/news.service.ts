import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNewsDto } from './dto/news-create.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './new.constants';
import { NewsModel } from './news.model';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(NewsModel) private readonly newsModel: typeof NewsModel,
  ) {}

  async create(dto: CreateNewsDto) {
    return await this.newsModel.create(dto);
  }

  async getAll() {
    let res = await this.newsModel.findAll();
    if (res.length == 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async getById(id: number) {
    let res = await this.newsModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateNewsDto) {
    let res = (
      await this.newsModel.update(
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
    let res = await this.newsModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
