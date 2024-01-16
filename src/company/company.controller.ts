import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyCreateDTO } from './DTO/CompanyDTOs/CompanyCreate.dto';
import { Companies } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('criar')
  async createCompany(@Body() companyCreateDTO: CompanyCreateDTO): Promise<Companies> {
    return await this.companyService.CreateCompany(companyCreateDTO);
  } 

  @Get('listar')
  async listar(): Promise<Companies[]>{
    return this.companyService.listar();
  }
}