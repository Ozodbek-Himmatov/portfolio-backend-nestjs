import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectsDto {

	@ApiProperty({ example: "" })
	title?: string;

  @ApiProperty({ example: "" })
	description?: string;

	@ApiProperty({ example: "" })
	preview?: string;

	@ApiProperty({ example: "" })
	demo?: string;

	;
}
