import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { productDto } from './dto/products.dto';
import { NOT_FOUND_ERROR } from './products.constants';
import { ProductsModel } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductsModel)
    private readonly productsModel: typeof ProductsModel,
  ) {}

  async create(dto: productDto) {
    try {
      return await this.productsModel.create(dto);
    } catch (e) {
      return {
        statusCode: 400,
        message: new Error(String(e)).toString(),
      };
    }
  }

  async get(id: number) {
    let res = await this.productsModel.findOne({
      where: { id },
    });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return res;
  }

  async update(id: number, dto: productDto) {
    let res = (
      await this.productsModel.update(
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
    const res = await this.productsModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
