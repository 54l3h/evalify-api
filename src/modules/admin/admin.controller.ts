import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller({
  path: 'admin',
  version: '1',
})
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  // Users Management
  @Post('users')
  createAdmin() {}

  @Delete('users/:id')
  @HttpCode(HttpStatus.OK)
  deleteUser(@Param('id') id: string) {}

  // Courses Management
  @Post('courses')
  createCourse() {}

  @Patch('courses/:id')
  updateCourse(@Param('id') id: string) {}

  @Delete('courses/:id')
  @HttpCode(HttpStatus.OK)
  deleteCourse(@Param('id') id: string) {}

  // Assessments Management
  @Get('assessments')
  getAssessments() {}

  @Post('courses/:courseId/assessments')
  createAssessment(@Param('courseId') courseId: string) {}

  @Patch('assessments/:id')
  updateAssessment(@Param('id') id: string) {}

  @Delete('assessments/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteAssessment(@Param('id') id: string) {}

  // Questions Management
  @Patch('assessments/:assessmentId/questions')
  addQuestion(@Param('assessmentId') assessmentId: string) {}

  @Patch('questions/:id')
  updateQuestion(@Param('id') id: string) {}

  @Delete('questions/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteQuestion(@Param('id') id: string) {}
}
