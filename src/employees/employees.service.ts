import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeModelName } from '../utils/constants/models';
import { Model } from 'mongoose';
import { Employee } from './employees.interface';

@Injectable()
export class EmployeesService {

    constructor(@InjectModel(EmployeeModelName) private readonly employeeModel: Model<Employee>) { }

    async createEmployee(employee: Employee) {
        const createdDepartment = await this.employeeModel.create(employee)
        return createdDepartment
    }

    async findEmployees(): Promise<Employee[] | null> {
        return await this.employeeModel.find();
    }

    async updateEmployee(employeeId: string, employeeData: Employee) {
        return await this.employeeModel.findByIdAndUpdate(employeeId, employeeData)
    }

    async deleteEmployee(employeeId: string) {
        await this.employeeModel.deleteOne({ _id: employeeId })
    }
}
