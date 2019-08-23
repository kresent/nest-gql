import { Injectable } from '@nestjs/common';
import { City } from '../graphql.schema';

@Injectable()
export class CityService {
  private readonly cities: City[] = [{ id: 1, name: 'City', population: 5 }];

  create(city: City): City {
    this.cities.push(city);
    return city;
  }

  findAll(): City[] {
    return this.cities;
  }

  findOneById(id: number): City {
    return this.cities.find(city => city.id === id);
  }
}