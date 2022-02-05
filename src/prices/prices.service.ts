import {
  BadRequestException,
  Injectable,
  StreamableFile,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createReadStream } from 'fs';
import { join } from 'path';
import { CreatePricesDto } from './dto/price-create.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR } from './prices.constants';
import { PricesModel } from './prices.model';
import * as fs from 'fs';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(PricesModel) private readonly priceModel: typeof PricesModel,
  ) {}

  async create(dto: CreatePricesDto) {
    return await this.priceModel.create(dto);
  }

  async getAll() {
    let res = await this.priceModel.findAll({ order: [['createdAt', 'DESC']] });
    if (res.length === 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreatePricesDto) {
    let res = (
      await this.priceModel.update(
        { ...dto },
        { where: { id }, returning: true },
      )
    )[1][0];
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async get_file() {
    fs.writeFileSync(
      `${process.cwd()}/store/price/price.txt`,
      (await this.priceModel.findAll({ where: { id: 1 } }))[0].content,
    );
    const file = createReadStream(
      join(process.cwd(), '/store/price/price.txt'),
    );
    return new StreamableFile(file);
  }
}
