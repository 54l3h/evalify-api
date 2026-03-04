import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('me')
  getMyProfile() {}

  @Get('me/insights')
  getMyInsights() {}

  @Get('me/courses')
  getMyEnrolledCourses() {}

  @Get('me/assessments/history')
  getMyAssessmentsHistory() {}

  @Get('me/assessments/:id/history')
  getMySpecificAssessmentHistory(@Param('id') assessmentId: string) {}
}
