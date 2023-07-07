import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutDto {
  @ApiProperty({ example: 'Ozodbek Ximmatov Azimjonovich' })
  fullname?: string;

  @ApiProperty({
    example: '',
  })
  user_photo?: string;

  @ApiProperty({
    example: 'Hi, my name is Ozodbek Ximmatov. I am Software Developer',
  })
  description?: string;

  @ApiProperty({ example: '+998(90)120-43-63' })
  phone?: string;

  @ApiProperty({ example: 'ozodbekhimmatov@gmail.com' })
  email?: string;
}
