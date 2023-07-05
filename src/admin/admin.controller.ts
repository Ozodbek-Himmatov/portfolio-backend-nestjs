import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AdminGuards } from '../guards/admin.guard';

@ApiBearerAuth()
@ApiTags('Admins')
@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create admins' })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all admins' })
  @Get()
  findAll(@Query() query: any) {
    return this.adminService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one admins' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update admins by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete admins by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
