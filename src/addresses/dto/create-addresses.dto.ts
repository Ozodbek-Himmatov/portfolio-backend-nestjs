import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressesDto {
  @ApiProperty({ example: "Telegram" })
	name: string;

	@ApiProperty({ example: "https://t.me/servantOfTheGatherer" })
	address: string;

	@ApiProperty({ example: "bx bxl-telegram" })
	icon: string;
}
