import {Controller, Get, Query, Res} from '@nestjs/common';
import {SVGFILE_PARAM_NAME, SvgService} from '../service/svg.service';
import {Response} from 'express';

@Controller('svg')
export class SvgController {

  public constructor(private svgService: SvgService) {}

  @Get()
  public async get(@Query() query: {[key: string]: string}, @Res() response: Response): Promise<void> {
    response.set('Content-Type', 'image/svg+xml');
    response.send(await this.svgService.getFileContent(query[SVGFILE_PARAM_NAME], query));
  }
}
