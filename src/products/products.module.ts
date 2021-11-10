import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsModel } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [SequelizeModule.forFeature([ProductsModel])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
