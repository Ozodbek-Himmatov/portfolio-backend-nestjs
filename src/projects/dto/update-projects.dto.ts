import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectsDto {
  @ApiProperty({ example: 'CRM Academy' })
  title?: string;

  @ApiProperty({ example: 'https://ozodbek-academy.netlify.app/' })
  preview?: string;

  @ApiProperty({
    example: 'https://github.com/Ozodbek-Himmatov/crm_academy',
  })
  demo?: string;

  @ApiProperty({
    example: 'https://ibb.co/sJv4TGS',
  })
  img?: string;

  @ApiProperty({
    example:
      'Web Customer Relationship Management for Academies and Universities',
  })
  description?: string;
}
