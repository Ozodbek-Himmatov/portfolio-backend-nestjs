import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Addresses, AddressesSchema } from './schemas/addresses.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Addresses.name, schema: AddressesSchema }]),
    JwtModule,
  ],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
