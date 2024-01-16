import { DataSource } from 'typeorm';
import { Companies } from './company.entity';

export const companyProviders = [
  {
    provide: 'COMPANY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Companies),
    inject: ['DATA_SOURCE'],
  },
];