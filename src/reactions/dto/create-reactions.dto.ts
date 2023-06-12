import { ApiProperty } from '@nestjs/swagger';

export class CreateReactionsDto {
  @ApiProperty({ example: "" })
	name: string;

	@ApiProperty({ example: "" })
	img: string;
}
