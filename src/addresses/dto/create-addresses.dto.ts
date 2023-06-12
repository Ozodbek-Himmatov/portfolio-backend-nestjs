import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressesDto {
  @ApiProperty({ example: "" })
	name: string;

	@ApiProperty({ example: "" })
	address: string;

	@ApiProperty({ example: "" })
	icon: string;
}
