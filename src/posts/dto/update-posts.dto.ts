import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostsDto {
  @ApiProperty({ example: "" })
	img?: string;

	@ApiProperty({ example: "" })
	title?: string;

	@ApiProperty({ example: "" })
	content?: string;

	@ApiProperty({ example: "" })
	tags?: string;

	;
}
