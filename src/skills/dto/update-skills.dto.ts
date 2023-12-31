import { ApiProperty } from '@nestjs/swagger';

export class UpdateSkillsDto {
  @ApiProperty({ example: "javascript" })
	title?: string;

	@ApiProperty({ example: "bx bxl-javascript" })
	icon?: string;
}
