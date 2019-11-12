import {SvgModule} from './module/svg/svg.module';
import {SystemModule} from './module/system/system.module';
import {Module} from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';
import {InternalServerErrorFilterException} from './module/system/exception-filter/internal-server-error.filter-exception';

@Module({
  imports: [
    SvgModule,
    SystemModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorFilterException
    }
  ]
})
export class ApiModule {
}
