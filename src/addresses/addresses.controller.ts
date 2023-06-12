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
import { AddressesService } from './addresses.service';
import { CreateAddressesDto } from './dto/create-addresses.dto';
import { UpdateAddressesDto } from './dto/update-addresses.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('Addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create addresses' })
  @Post()
  create(@Body() createAddressesDto: CreateAddressesDto) {
    return this.addressesService.create(createAddressesDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all addresses' })
  @Get()
  findAll(@Query() query: any) {
    return this.addressesService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one addresses' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update addresses by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAddressesDto: UpdateAddressesDto) {
    return this.addressesService.update(id, updateAddressesDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete addresses by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }
}
