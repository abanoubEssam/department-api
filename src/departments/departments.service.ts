import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Department } from './departments.interface';
import { DepartmentModelName } from '../utils/constants/models';
import { Model } from 'mongoose';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel(DepartmentModelName) private readonly departmentModel: Model<Department>) { }

    async createDepartment(department: Department) {
        const createdDepartment = await this.departmentModel.create(department)
        return createdDepartment
    }

    async findDepartments(): Promise<Department[] | null> {
        return await this.departmentModel.find();
    }

    async updateDepartment(departmentId: string, departmentData: Department) {
        return await this.departmentModel.findByIdAndUpdate(departmentId, departmentData, { new: true })
    }

    async deleteDepartment(departmentId: string) {
        await this.departmentModel.deleteOne({ _id: departmentId })
    }
}
