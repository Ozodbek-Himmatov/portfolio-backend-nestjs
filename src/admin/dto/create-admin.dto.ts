import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: "" })
	fullname: string;

	@ApiProperty({ example: "" })
	password: string;

	@ApiProperty({ example: "" })
	email: string;

	@ApiProperty({ example: "" })
	phone: string;

	@ApiProperty({ example: "" })
	token: string;

	@ApiProperty({ example: "" })
	description: string;

	@ApiProperty({ example: "" })
	avatar: string;
}
