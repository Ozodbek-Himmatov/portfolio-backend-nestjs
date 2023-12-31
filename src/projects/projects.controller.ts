import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  // UseGuards,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
// import { AdminGuards } from '../guards/admin.guard';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create projects' })
  @Post()
  create(@Body() createProjectsDto: CreateProjectsDto) {
    return this.projectsService.create(createProjectsDto);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all projects' })
  @Get()
  findAll(@Query() query: any) {
    return this.projectsService.findAll(query);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one projects' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update projects by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectsDto,
  ) {
    return this.projectsService.update(id, updateProjectsDto);
  }

  // @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete projects by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
