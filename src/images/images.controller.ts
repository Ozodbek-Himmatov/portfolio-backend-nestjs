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
import { ImagesService } from './images.service';
import { CreateImagesDto } from './dto/create-images.dto';
import { UpdateImagesDto } from './dto/update-images.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create images' })
  @Post()
  create(@Body() createImagesDto: CreateImagesDto) {
    return this.imagesService.create(createImagesDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all images' })
  @Get()
  findAll(@Query() query: any) {
    return this.imagesService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one images' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update images by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateImagesDto: UpdateImagesDto) {
    return this.imagesService.update(id, updateImagesDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete images by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
