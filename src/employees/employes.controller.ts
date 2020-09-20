import { Controller, Get, Post, Patch, Body, Param, Delete, HttpCode } from '@nestjs/common';
import { Employee } from './employees.interface';
import { EmployeesService } from './employees.service';

@Controller('/employees')
export class EmployeesController {
    constructor(private readonly _employeeService: EmployeesService) { }

    @Get('/')
    async findEmployees(): Promise<Employee[] | null> {
        return await this._employeeService.findEmployees();
    }

    @Post('/')
    async createEmployee(@Body() employee: Employee): Promise<Employee> {
        return await this._employeeService.createEmployee(employee);
    }

    @Patch('/:employeeId')
    async updateEmployee(
        @Body() employee: Employee,
        @Param("employeeId") employeeId: string
    ){
        return await this._employeeService.updateEmployee(employeeId , employee)
    }

    @Delete("/:employeeId")
    @HttpCode(204)
    async deleteEmployee(
        @Param("employeeId") employeeId: string
    ):Promise<void>{
         await this._employeeService.deleteEmployee(employeeId)
    }
}
