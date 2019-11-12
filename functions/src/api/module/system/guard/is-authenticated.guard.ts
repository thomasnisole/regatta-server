import {CanActivate, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../service/auth.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  public constructor(private authService: AuthService) {}

  public async canActivate(): Promise<boolean> {
    const uid: string = await this.authService.getAuthenticatedUserUid();

    if (!uid) {
      throw new UnauthorizedException('You are not authenticated');
    }

    return !!uid;
  }
}
