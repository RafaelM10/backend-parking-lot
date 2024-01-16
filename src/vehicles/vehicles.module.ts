import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { VehiclesController } from './vehicles.controller';
import { vehiclesProviders } from './vehicles.providers';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VehiclesController],
  providers: [
    ...vehiclesProviders,
    VehiclesService,
  ],
})
export class VehiclesModule {}