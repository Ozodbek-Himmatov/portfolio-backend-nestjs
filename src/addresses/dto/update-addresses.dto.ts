import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressesDto {
  @ApiProperty({ example: 'Github' })
  name?: string;

  @ApiProperty({ example: 'https://github.com/FarruxbekNozimov' })
  address?: string;

  @ApiProperty({ example: 'bx bxl-github' })
  icon?: string;
}