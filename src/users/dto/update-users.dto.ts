import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsersDto {
  @ApiProperty({ example: "" })
	username?: string;

	@ApiProperty({ example: "" })
	password?: string;

	@ApiProperty({ example: "" })
	token?: string;

	;
}
