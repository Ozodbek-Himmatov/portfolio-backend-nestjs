import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: '123' })
  username: string;

  @ApiProperty({ example: '123' })
  password: string;
}
