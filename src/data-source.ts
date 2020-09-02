import { RESTDataSource } from 'apollo-datasource-rest';
import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InMemoryLRUCache } from 'apollo-server-caching';

export class DataSource extends RESTDataSource {
  constructor(
    @Inject(CONTEXT) context,
    private configService: ConfigService,
  ) {
    super();
    const host      = process.env.APIHOST || this.configService.get<string>('API_HOST');
    const protocol = process.env.APIPROTOCOL === 'http' ? 'http' : 'https';
    const port      = process.env.APIPORT || (process.env.NODE_ENV === 'production' ? 80 : 443);
    const basePath  = process.env.APIBASEPATH || this.configService.get<string>('API_BASE_PATH');

    this.baseURL = `${protocol}://${host}:${port}${basePath}`;
    this.initialize( { context, cache: new InMemoryLRUCache() });
  }

  willSendRequest(request) {
    this.setHeaders(this.context, request);
  }

  setHeaders(context, request) {
    request.headers.set('Content-Type', 'application/json');
    Object.keys(context.headers).forEach((headerKey) => {
      switch (headerKey.toLowerCase()) {
        case 'content-length':
        case 'accept-encoding':
          break;
        case 'host':
          request.headers.set(headerKey, process.env.APIHOST || this.configService.get<string>('API_HOST'));
          break;
        default:
          request.headers.set(headerKey, context.headers[headerKey]);
          break;
      }
    });

    if (process.env.NODE_ENV === 'production') {
      request.headers.set('X-2api-Endpoint', process.env.MARATHON_APP_ID);
      request.headers.set('X-2api-Host', process.env.HOST);
      request.headers.set('X-2api-Hostname', process.env.HOSTNAME);
    }
  };
}
