import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { contactsController } from './contacts.controller';
import { ContactsModel } from './contacts.model';
import { PriceService } from './contacts.service';

@Module({
  imports: [SequelizeModule.forFeature([ContactsModel]), AuthModule],
  controllers: [contactsController],
  providers: [PriceService],
})
export class ContactsModule {}
