import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DescriptionService } from './description.service';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Description')
@Controller('description')
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create description' })
  @Post()
  create(@Body() createDescriptionDto: CreateDescriptionDto) {
    return this.descriptionService.create(createDescriptionDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all description' })
  @Get()
  findAll(@Query() query: any) {
    return this.descriptionService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one description' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update description by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDescriptionDto: UpdateDescriptionDto) {
    return this.descriptionService.update(id, updateDescriptionDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete description by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionService.remove(id);
  }
}
