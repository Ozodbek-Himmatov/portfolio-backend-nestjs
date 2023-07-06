import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty({ example: '123' })
  username?: string;

  @ApiProperty({ example: '123' })
  password?: string;

  token?: string;
}