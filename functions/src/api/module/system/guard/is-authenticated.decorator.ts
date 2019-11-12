import {UseGuards} from '@nestjs/common';
import {IsAuthenticatedGuard} from './is-authenticated.guard';

// tslint:disable-next-line:variable-name

export function IsAuthenticated(): any {
  const setupGuard: any = UseGuards(IsAuthenticatedGuard);

  return (target: any, key?: string, descriptor?: any) => {
    setupGuard(target, key, descriptor);
  };
}
