import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ClustersModule } from './clusters/clusters.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: async ({ req }) => req,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClustersModule,
  ],
})
export class AppModule {}
