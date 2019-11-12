import {Inject, Injectable} from '@nestjs/common';
import {TOKEN_FIREBASE_STORAGE} from '../../system/system.module.di';
import * as admin from 'firebase-admin';

export const SVGFILE_PARAM_NAME: string = 'svgfile';

@Injectable()
export class SvgService {

  public constructor(@Inject(TOKEN_FIREBASE_STORAGE) private storage: admin.storage.Storage) {}


  public async getFileContent(svgFile: string, params: {[key: string]: string}): Promise<string> {
    let content: string = (await this.storage.bucket().file(`/svg/${svgFile}.svg`).download()).toString();

    Object.keys(params).filter((key: string) => key !== SVGFILE_PARAM_NAME).forEach((key: string) => {
      content = content.replace(`{${key}}`, params[key]);
    });

    content = content.replace(/{[a-z\-1-9]*}/g, 'display: none;');

    return content;
  }
}
