from typing import Optional, List
from errors.custom_error import CustomError, IErrorStruct

class DatabaseConnectionError(CustomError):
    status_code = 500
    message = 'Error connecting to database'

    def __init__(self):
        super().__init__(self.message)
        

    def serialize_errors(self) -> List[IErrorStruct]:
        return [IErrorStruct(message=self.message).__dict__]
