import { ApiProperty } from '@nestjs/swagger';

export class UpdateReactionsDto {
  @ApiProperty({ example: "" })
	name?: string;

	@ApiProperty({ example: "" })
	img?: string;

	;
}
