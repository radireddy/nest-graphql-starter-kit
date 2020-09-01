import { Args, Query, Resolver, CONTEXT } from '@nestjs/graphql';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { InMemoryLRUCache } from 'apollo-server-caching';
import { Cluster } from '../graphql.schema';
import { ClustersService } from './clusters.service';

@Resolver('Clusters')
@Injectable({ scope: Scope.REQUEST })
export class ClustersResolvers {
  constructor(
    @Inject(CONTEXT) context,
    private readonly clustersService: ClustersService) {
    this.clustersService.initialize( { context, cache: new InMemoryLRUCache() });
  }

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