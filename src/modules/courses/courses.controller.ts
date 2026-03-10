import { Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller({ path: 'courses', version: '1' })
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  getCourses() {}

  @Get(':id')
  getCourseById(@Param('id') id: string) {}

  @Post(':id/enroll')
  enroll(@Param('id') id: string) {}

  @Get(':id/assessments')
  getCourseAssessments(@Param('id') id: string) {}
}
