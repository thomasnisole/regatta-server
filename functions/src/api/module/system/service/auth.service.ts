import {Inject, Injectable} from '@nestjs/common';
import {REQUEST} from '@nestjs/core';
import {Request} from 'express';
import * as admin from 'firebase-admin';
import DecodedIdToken = admin.auth.DecodedIdToken;

@Injectable()
export class AuthService {

  public constructor(@Inject(REQUEST) private request: Request) {
  }

  public async getAuthenticatedUserUid(): Promise<string> {
    const authorization: string|undefined = this.request.get('authorization');
    if (!authorization || authorization.startsWith('Bearer ')) {
      throw new Error('No or bad token in headers');
    }

    const token: DecodedIdToken = await admin.auth().verifyIdToken(authorization.split('Bearer ')[1]);

    return token.uid;
  }
}
