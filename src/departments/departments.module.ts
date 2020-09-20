import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsController } from './departments.controller';
import { DepartmentSchema } from './departments.schema';
import { DepartmentsService } from './departments.service';
import { DepartmentModelName } from '../utils/constants/models';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DepartmentModelName,
        schema: DepartmentSchema
      }
    ])
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
