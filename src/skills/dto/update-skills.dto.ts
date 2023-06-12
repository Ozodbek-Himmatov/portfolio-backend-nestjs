import { ApiProperty } from '@nestjs/swagger';

export class UpdateSkillsDto {
  @ApiProperty({ example: "" })
	title?: string;

	@ApiProperty({ example: "" })
	icon?: string;

	@ApiProperty({ example: "" })
	rating?: string;
}
