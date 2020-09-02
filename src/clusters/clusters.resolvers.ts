import { Args, Query, Resolver } from '@nestjs/graphql';
import { Cluster } from '../graphql.schema';
import { ClustersService } from './clusters.service';

@Resolver('Clusters')
export class ClustersResolvers {
  constructor(private readonly clustersService: ClustersService) {}

  @Query()
  async getClusters(
    @Args('projectId') projectId: string) {
    return this.clustersService.findAll(projectId);
  }

  @Query()
  async getCluster(
    @Args('projectId') projectId: string,
    @Args('clusterId') clusterId: string,
  ): Promise<Cluster> {
    return this.clustersService.findClusterById(projectId, clusterId);
  }
}