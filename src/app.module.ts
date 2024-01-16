import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    CompanyModule,
    VehiclesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
