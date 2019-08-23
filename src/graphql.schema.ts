/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class CreateCityInput {
  name?: string;
  population?: number;
}

export abstract class City {
  id?: number;
  name?: string;
  population?: number;
}

export abstract class IMutation {
  abstract createCity(createCityInput?: CreateCityInput): City | Promise<City>;
}

export abstract class IQuery {
  abstract getCities(): City[] | Promise<City[]>;

  abstract city(id: string): City | Promise<City>;

  abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
  abstract cityCreated(): City | Promise<City>;
}
