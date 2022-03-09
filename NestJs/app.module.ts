import { Module , NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './Clients/clients.module';
import { EmployeeModule } from './Employee/employee.module';
import { SalaryModule } from './Salary/salary.module';
import { StudentService } from './student.services';
import { StudentModule } from './Student/student.module';
import { MongooseModule } from "@nestjs/mongoose";
import { VendorModule } from './Vendors/vendor.module';
import { ProductModule } from './Products/product.module';
import { LoggerMiddleware } from './Logger/logger.middleware';

@Module({
  imports: [ClientModule,EmployeeModule,SalaryModule,StudentModule,VendorModule,MongooseModule.forRoot('mongodb://localhost:27017/vendor')],
  // imports:[ProductModule,MongooseModule.forRoot('mongodb://localhost:27017/product')],
  // controllers: [AppController],
  // providers: [AppService,StudentService]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('vendor')
  }
}
