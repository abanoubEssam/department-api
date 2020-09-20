import { DepartmentsService } from './departments.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { Department } from './departments.interface';

@Controller('/departments')
export class DepartmentsController {
    constructor(private readonly _departmentsService: DepartmentsService) { }

    
    @Get('/')
    async findDepartments(): Promise<Department[] | null> {
        return await this._departmentsService.findDepartments();
    }

    @Post('/')
    async createUser(@Body() department: Department): Promise<Department> {
        return await this._departmentsService.createDepartment(department);
    }

    @Patch('/:departmentId')
    async updateDepartment(
        @Body() department: Department,
        @Param("departmentId") departmentId: string
    ){
        return await this._departmentsService.updateDepartment(departmentId , department)
    }

    @Delete("/:departmentId")
    @HttpCode(204)
    async deleteDepartment(
        @Param("departmentId") departmentId: string
    ):Promise<void>{
         await this._departmentsService.deleteDepartment(departmentId)
    }


}
