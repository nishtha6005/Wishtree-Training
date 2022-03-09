import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
  AddNewStudent(): string {
    return 'New Student Added Successfully !!';
  }

  EditStudent(): string {
    return 'Student data has been updated successfully !!';
  }

  DeleteStudent(): string {
    return 'Student data has been deleted successfully !!';
  }

  GetAllStudents(): any {
    return ['Raj Singh','Mohit Sharma','Aditi Singh'];
  }
}
