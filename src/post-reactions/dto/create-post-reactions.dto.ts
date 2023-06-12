import { ApiProperty } from '@nestjs/swagger';

export class CreatePostReactionsDto {
  @ApiProperty({ example: "" })
	reaction_id: number;

	@ApiProperty({ example: "" })
	post_id: number;

	@ApiProperty({ example: "" })
	user_id: number;

	@ApiProperty({ example: "" })
	quantity: number;
}
