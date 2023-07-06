import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentsDto {

	@ApiProperty({ example: "" })
	post_id: number;

	@ApiProperty({ example: "maa wadda a`ka robbuka wa ma qola" })
	content: string;

	@ApiProperty({ example: "" })
	time: string;

	@ApiProperty({ example: "" })
	status: string;
	
}
