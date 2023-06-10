import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectsDto {
  @ApiProperty({ example: "" })
	description_id: number;

	@ApiProperty({ example: "" })
	title: string;

	@ApiProperty({ example: "" })
	preview: string;

	@ApiProperty({ example: "" })
	demo: string;

	;
}
