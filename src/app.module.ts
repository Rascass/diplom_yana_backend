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
      models: [NewsModel, RolesModel, TitlesModel, UsersModel],
      logging: false,
    }),
    NewsModule,
    RolesModule,
    TitlesModule,
    HourseTypesModule,
    AuthModule,
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
