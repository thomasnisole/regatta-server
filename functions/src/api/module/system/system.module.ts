import {Global, Module} from '@nestjs/common';
import {AuthService} from './service/auth.service';
import * as admin from 'firebase-admin';
import {TOKEN_FIREBASE_STORAGE} from './system.module.di';

function createStorage(): admin.storage.Storage {
  return admin.storage();
}

@Global()
@Module({
  providers: [
    AuthService,
    {
      provide: TOKEN_FIREBASE_STORAGE,
      useFactory: createStorage
    }
  ],
  exports: [
    TOKEN_FIREBASE_STORAGE
  ]
})
export class SystemModule {
}
