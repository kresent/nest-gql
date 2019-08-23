import { Min } from 'class-validator';
import { CreateCityInput } from '../../graphql.schema';

export class CreateCityDto extends CreateCityInput {
  @Min(1)
  age: number;
}