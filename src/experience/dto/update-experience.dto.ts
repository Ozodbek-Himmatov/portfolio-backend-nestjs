import { ApiProperty } from '@nestjs/swagger';

export class UpdateExperienceDto {
  @ApiProperty({ example: 'Microsoft Corporation' })
  company_name?: string;

  @ApiProperty({ example: 'Software Engineer' })
  position?: string;

  @ApiProperty({ example: '13.03.2024' })
  start_time?: Date;

  @ApiProperty({ example: '13.05.2024' })
  end_time?: string;
}
