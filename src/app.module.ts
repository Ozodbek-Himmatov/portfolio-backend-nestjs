import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AddressesModule } from './addresses/addresses.module';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { DescriptionModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AddressesModule,
    AdminModule,
    AuthModule,
    CommentsModule,
    DescriptionModule,
    ExperienceModule,
    PostsModule,
    ProjectsModule,
    SkillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
