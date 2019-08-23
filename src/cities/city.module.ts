import { Module } from '@nestjs/common';
import { CityResolvers } from './city.resolvers';
import { CityService } from './city.service';

@Module({
  providers: [CityService, CityResolvers],
})
export class CityModule { }