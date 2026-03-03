import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { CoursesModule } from './modules/courses/courses.module';
import { AssessmentsModule } from './modules/assessments/assessments.module';

@Module({
  imports: [AuthModule, AdminModule, CoursesModule, AssessmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
