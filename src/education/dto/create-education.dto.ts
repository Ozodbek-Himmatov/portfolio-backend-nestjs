import { ApiProperty } from '@nestjs/swagger';

export class CreateEducationDto {
  @ApiProperty({ example: "" })
	name: string;

	@ApiProperty({ example: "" })
	time: string;
}
