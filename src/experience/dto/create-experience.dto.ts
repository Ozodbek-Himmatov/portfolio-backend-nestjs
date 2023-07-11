import { ApiProperty } from '@nestjs/swagger';

export class CreateExperienceDto {
  @ApiProperty({ example: "Microsoft Corporation" })
	company_name: string;

	@ApiProperty({ example: "https://www.microsoft.com/" })
	link: string;

	@ApiProperty({ example: "13.03.2024" })
	start_time: string;

	@ApiProperty({ example: "13.05.2024" })
	end_time: string;
}
