import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Images, ImagesSchema } from './schemas/images.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Images.name, schema: ImagesSchema }]),
    JwtModule,
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
