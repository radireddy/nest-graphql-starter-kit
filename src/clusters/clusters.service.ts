import { map } from 'lodash';
import { Injectable, Scope } from '@nestjs/common';
import { DataSource } from './../data-source';

@Injectable({ scope: Scope.REQUEST })
export class ClustersService extends DataSource {

  async findAll(projectId: string) {
    const clusterIds = await this.get(`cloud/project/${projectId}/kube`);
    return map(clusterIds, id => this.findClusterById(projectId, id));
  }

  findClusterById(projectId: string, clusterId: string) {
    return this.get(`cloud/project/${projectId}/kube/${clusterId}`);
  }
}