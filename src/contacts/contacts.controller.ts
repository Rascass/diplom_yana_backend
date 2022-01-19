import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdValidationPipe } from 'src/pipes/id-validation.pipes';
import { CreateContactsDto } from './dto/contact.dto';
import { ContactsModel } from './contacts.model';
import { PriceService } from './contacts.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('Контакты')
@Controller('Contacts')
export class contactsController {
  constructor(private readonly priceService: PriceService) {}

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Создание контактов' })
  @ApiResponse({ status: 201, type: ContactsModel })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateContactsDto) {
    return await this.priceService.create(dto);
  }

  @ApiOperation({ summary: 'Получение контактов' })
  @ApiResponse({ status: 200, type: [ContactsModel] })
  @Get()
  async get() {
    return await this.priceService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Изменение контактов' })
  @ApiResponse({ status: 200, type: ContactsModel })
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', IdValidationPipe) id: number,
    @Body() dto: CreateContactsDto,
  ) {
    return await this.priceService.update(id, dto);
  }
}
