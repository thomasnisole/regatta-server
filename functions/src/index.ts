import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as express from 'express';
import {NestFactory} from '@nestjs/core';
import {ExpressAdapter} from '@nestjs/platform-express';
import {INestApplication, ValidationPipe} from '@nestjs/common';
import {ApiModule} from './api/api.module';

admin.initializeApp();

const server: express.Express = express();

async function bootstrap(expressInstance: express.Express): Promise<void> {
  const app: INestApplication = await NestFactory.create(
    ApiModule,
    new ExpressAdapter(expressInstance),
    {
      cors: {
        origin: '*',
      }
    }
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.init();
}

void bootstrap(server);

exports.api = functions.runWith({
  memory: '512MB',
  timeoutSeconds: 300
}).https.onRequest(server);
