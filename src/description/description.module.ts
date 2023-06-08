import { Module } from '@nestjs/common';
import { DescriptionService } from './description.service';
import { DescriptionController } from './description.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Description, DescriptionSchema } from './schemas/description.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Description.name, schema: DescriptionSchema }]),
    JwtModule,
  ],
  controllers: [DescriptionController],
  providers: [DescriptionService],
})
export class DescriptionModule {}
