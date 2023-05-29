/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { LocalAuthGuard } from "./local-auth.guard"
import { ApiTags } from "@nestjs/swagger"
import { LoginDto } from "./dtos/login.dto"

@ApiTags("login")
@Controller("login")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: LoginDto) {
    return await this.authService.login(user.email)
  }
}
