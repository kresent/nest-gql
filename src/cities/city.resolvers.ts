import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { City } from '../graphql.schema';
import { CityGuard } from './city.guard';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto'

const pubSub = new PubSub();

@Resolver('City')
export class CityResolvers {
  constructor(private readonly cityService: CityService) {}

  @Query()
  @UseGuards(CityGuard)
  async getCities() {
    return await this.cityService.findAll();
  }

  @Query('city')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<City> {
    return await this.cityService.findOneById(id);
  }

  @Mutation('createCity')
  async create(@Args('createCityInput') args: CreateCityDto): Promise<City> {
    const createdCity = await this.cityService.create(args);
    pubSub.publish('cityCreated', { cityCreated: createdCity });
    return createdCity;
  }

  @Subscription('cityCreated')
  cityCreated() {
    return pubSub.asyncIterator('cityCreated');
  }
}
