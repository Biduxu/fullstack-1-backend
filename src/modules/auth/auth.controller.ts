/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface UserLogin {
  email: string,
  password: string
}

@Controller("login")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: UserLogin) {
    return await this.authService.login(user.email)
  }
}
