import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyCreateDTO } from './DTO/CompanyDTOs/CompanyCreate.dto';
import { Companies } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Companies>,
  ) {}

  async CreateCompany(companyCreateDTO: CompanyCreateDTO): Promise<Companies> {
    const newCompany = this.companyRepository.create(companyCreateDTO)
    return await this.companyRepository.save(newCompany);
  }

  async listar(): Promise<Companies[]> {
    return this.companyRepository.find();
  }
}