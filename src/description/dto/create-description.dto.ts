import { ApiProperty } from '@nestjs/swagger';

export class CreateDescriptionDto {
  @ApiProperty({ example: "" })
	title: string;

	@ApiProperty({ example: "" })
	description: string;
}
