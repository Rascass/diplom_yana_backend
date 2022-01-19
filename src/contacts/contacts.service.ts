import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContactsDto } from './dto/contact.dto';
import { EMPTY_ERROR, NOT_FOUND_ERROR} from './contacts.constants';
import { ContactsModel } from './contacts.model';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(ContactsModel)
    private readonly priceModel: typeof ContactsModel,
  ) {}

  async create(dto: CreateContactsDto) {
    return await this.priceModel.create(dto);
  }

  async getAll() {
    let res = await this.priceModel.findAll({ order: [['createdAt', 'DESC']] });
    if (res.length == 0) {
      throw new BadRequestException(EMPTY_ERROR);
    }
    return res;
  }

  async update(id: number, dto: CreateContactsDto) {
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

  async delete(id: number) {
    let res = await this.priceModel.destroy({ where: { id } });
    if (!res) {
      throw new BadRequestException(NOT_FOUND_ERROR);
    }
    return {
      statusCode: 200,
      message: 'ok',
    };
  }
}
