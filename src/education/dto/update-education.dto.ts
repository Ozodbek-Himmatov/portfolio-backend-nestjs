import { ApiProperty } from '@nestjs/swagger';

export class UpdateEducationDto {
  @ApiProperty({ example: "" })
	name?: string;

	@ApiProperty({ example: "" })
	time?: string;

	;
}
