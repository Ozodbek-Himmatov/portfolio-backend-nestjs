import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentsDto {
  @ApiProperty({ example: "" })
	user_id?: number;

	@ApiProperty({ example: "" })
	post_id?: number;

	@ApiProperty({ example: "" })
	content?: string;

	@ApiProperty({ example: "" })
	time?: string;
}
