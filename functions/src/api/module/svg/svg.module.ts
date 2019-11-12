import {Module} from '@nestjs/common';
import {SvgController} from './controller/svg.controller';
import {SvgService} from './service/svg.service';

@Module({
  controllers: [
    SvgController
  ],
  providers: [
    SvgService
  ]
})
export class SvgModule {
}
