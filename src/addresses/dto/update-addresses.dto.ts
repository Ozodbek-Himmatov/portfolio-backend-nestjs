import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressesDto {
  @ApiProperty({ example: "" })
	name?: string;

	@ApiProperty({ example: "" })
	address?: string;

	@ApiProperty({ example: "" })
	icon?: string;
}
