import { DataSource } from 'typeorm';
import { Vehicles } from './vehicles.entity';

export const vehiclesProviders = [
  {
    provide: 'VEHICLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Vehicles),
    inject: ['DATA_SOURCE'],
  },
];