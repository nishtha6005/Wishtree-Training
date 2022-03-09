import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './student.services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly studentService:StudentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/add-student')
  addStudent():string{
    return this.studentService.AddNewStudent();
  }

  @Get('/edit-student')
  editStudent():string{
    return this.studentService.EditStudent();
  }

  @Get('/delete-student')
  deleteStudent():string{
    return this.studentService.DeleteStudent();
  }

  @Get('/all')
  allStudents():string{
    return this.studentService.GetAllStudents();
  }
}
