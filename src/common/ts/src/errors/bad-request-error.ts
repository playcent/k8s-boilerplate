import { CustomError, IErrorStruct } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 500;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): IErrorStruct[] {
    return [{ message: this.message }];
  }
}
