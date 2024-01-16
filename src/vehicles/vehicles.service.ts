import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicles } from './vehicles.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @Inject('VEHICLES_REPOSITORY')
    private vehiclesRepository: Repository<Vehicles>,
  ) {}

  async listar(): Promise<Vehicles[]> {
    return this.vehiclesRepository.find();
  }
}