import { ApiProperty } from '@nestjs/swagger';

export class UpdateImagesDto {
  @ApiProperty({ example: "" })
	project_id?: number;

	@ApiProperty({ example: "" })
	title?: string;

	@ApiProperty({ example: "" })
	img?: string;
}
