import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/department'),
    DepartmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
