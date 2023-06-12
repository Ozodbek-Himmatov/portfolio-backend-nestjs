import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillsDto {
  @ApiProperty({ example: "" })
	title: string;

	@ApiProperty({ example: "" })
	icon: string;

	@ApiProperty({ example: "" })
	rating: string;
}
