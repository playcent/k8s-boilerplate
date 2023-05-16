import { CustomError, IErrorStruct } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  constructor(public reason: string = 'Error connecting to database') {
    super(reason);

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): IErrorStruct[] {
    return [{ message: this.reason }];
  }
}
