import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  signUp() {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn() {}

  @Post('google')
  @HttpCode(HttpStatus.OK)
  authenticateWithGoogle() {}

  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  verifyOtp() {}

  @Post('forgot-password')
  @HttpCode(HttpStatus.ACCEPTED) // 202: Acknowledged, email process initiated
  forgotPassword() {}

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  resetPassword() {}
}
