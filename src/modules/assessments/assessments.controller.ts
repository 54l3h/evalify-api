import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';

@Controller({
  path: 'assessments',
  version: '1',
})
export class AssessmentsController {
  constructor(private readonly assessmentsService: AssessmentsService) {}
  @Get(':id')
  getAssessmentDetails(@Param('id') id: string) {}

  @Post(':id/start')
  startAssessment(@Param('id') id: string) {}

  @Post(':id/submit')
  submitAssessment(@Param('id') id: string, @Body() answers: any) {}

  @Get(':id/results')
  getMyResults(@Param('id') id: string) {}
}
