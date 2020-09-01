import { Module } from '@nestjs/common';
import { ClustersResolvers } from './clusters.resolvers';
import { ClustersService } from './clusters.service';

@Module({
  providers: [ClustersService, ClustersResolvers],
})
export class ClustersModule {}