import {ArgumentsHost, Catch, HttpException} from '@nestjs/common';
import {BaseExceptionFilter} from '@nestjs/core';

@Catch()
export class InternalServerErrorFilterException extends BaseExceptionFilter {

  public catch(exception: Error, host: ArgumentsHost): void {
    if (!(exception instanceof HttpException)) {
      console.warn('An unknown error occurred :', exception.stack);
    }

    super.catch(exception, host);
  }
}
