import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AddressesModule } from './addresses/addresses.module';
import { AdminModule } from './admin/admin.module';
import { CommentsModule } from './comments/comments.module';
import { DescriptionModule } from './description/description.module';
import { EducationModule } from './education/education.module';
import { ImagesModule } from './images/images.module';
import { PostReactionsModule } from './post-reactions/post-reactions.module';
import { PostsModule } from './posts/posts.module';
import { ProjectsModule } from './projects/projects.module';
import { ReactionsModule } from './reactions/reactions.module';
import { SkillsModule } from './skills/skills.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AddressesModule,
    AdminModule,
    CommentsModule,
    DescriptionModule,
    EducationModule,
    ImagesModule,
    PostReactionsModule,
    PostsModule,
    ProjectsModule,
    ReactionsModule,
    SkillsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
