import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModel } from './news/news.model';
import { NewsModule } from './news/news.module';
import { RolesModule } from './roles/roles.module';
import { TitlesModule } from './titles/titles.module';
import { HourseTypesModule } from './hourse-types/hourse-types.module';
import { AuthModule } from './auth/auth.module';
import { RolesModel } from './roles/roles.model';
import { TitlesModel } from './titles/titles.model';
import { UsersModel } from './auth/users.model';
import { PersonsModule } from './persons/persons.module';
import { PersonsModel } from './persons/persons.model';
import { RidersModule } from './riders/riders.module';
import { RidersModel } from './riders/riders.model';
import { HoursesModule } from './hourses/hourses.module';
import { HourseTypesModel } from './hourse-types/hourse-types.model';
import { HoursesModel } from './hourses/hourses.model';
import { ClubsModule } from './clubs/clubs.module';
import { ClubsModel } from './clubs/clubs.model';
import { HoursesOwnersModule } from './hourses-owners/hourses-owners.module';
import { HoursesOwnersModel } from './hourses-owners/hourses-owners.model';
import { ProductsModule } from './products/products.module';
import { ProductsModel } from './products/products.model';
import { CompetitionsModule } from './competitions/competitions.module';
import { CompetitionsModel } from './competitions/competitions.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      autoLoadModels: true,
      models: [
        NewsModel,
        RolesModel,
        TitlesModel,
        UsersModel,
        PersonsModel,
        RidersModel,
        HourseTypesModel,
        ClubsModel,
        HoursesModel,
        HoursesOwnersModel,
        ProductsModel,
        CompetitionsModel,
      ],
      logging: false,
    }),
    NewsModule,
    RolesModule,
    TitlesModule,
    HourseTypesModule,
    AuthModule,
    PersonsModule,
    RidersModule,
    HoursesModule,
    ClubsModule,
    HoursesOwnersModule,
    ProductsModule,
    CompetitionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
