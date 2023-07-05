import {
  Controller,
  Post,
  Body,
  HttpCode,
  Res,
  Param,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login Admin' })
  @HttpCode(200)
  @Post('admins/login')
  login(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(createAdminDto, res);
  }
}
