
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Cluster {
    id?: string;
    name?: string;
    region?: string;
    status?: string;
    url?: string;
    nodesUrl?: string;
    version?: string;
    updatePolicy?: string;
    isUpToDate?: boolean;
    controlPlaneIsUpToDate?: boolean;
}

export abstract class IQuery {
    abstract getClusters(projectId: string): Cluster[] | Promise<Cluster[]>;

    abstract getCluster(projectId: string, clusterId: string): Cluster | Promise<Cluster>;
}
