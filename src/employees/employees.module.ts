import { Module } from '@nestjs/common';
import { EmployeesController } from './employes.controller';
import { EmployeesService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModelName } from '../utils/constants/models';
import { EmployeesSchema } from './employees.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EmployeeModelName,
        schema: EmployeesSchema
      }
    ])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
