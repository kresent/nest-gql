import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CityModule } from "./cities/city.module";

@Module({
  imports: [
    CityModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    })
  ]
})
export class AppModule {}
