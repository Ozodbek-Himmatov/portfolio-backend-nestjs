import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillsDto {
  @ApiProperty({ example: "javascript" })
	title: string;

	@ApiProperty({ example: "bx bxl-javascript" })
	icon: string;
}
