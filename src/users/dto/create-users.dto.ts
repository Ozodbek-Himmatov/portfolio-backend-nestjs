import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty({ example: "" })
	username: string;

	@ApiProperty({ example: "" })
	password: string;

	@ApiProperty({ example: "" })
	token: string;

	;
}
