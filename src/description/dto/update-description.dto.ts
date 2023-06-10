import { ApiProperty } from '@nestjs/swagger';

export class UpdateDescriptionDto {
  @ApiProperty({ example: "" })
	title?: string;

	@ApiProperty({ example: "" })
	description?: string;

	;
}
