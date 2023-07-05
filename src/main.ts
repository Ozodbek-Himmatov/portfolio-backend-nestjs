import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    console.log('Starting app');

    app.enableCors({
      allowedHeaders: ['content-type'],
      origin: [
        'http://localhost:5174',
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:3001',
        '*',
      ],
      credentials: true,
    });

    const PORT = process.env.PORT || 7000;

    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('NestJS TEST')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodeJS, NestJS, MongoDB, mongoose')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document, {
      customCssUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
      ],
    });

    app.listen(PORT, () => {
      console.log(`Server ${PORT} da yuguryapti...`);
    });
    if (process.env.NODE_ENV === 'development') {
      const pathToSwaggerStaticFolder = resolve(
        process.cwd(),
        'swagger-static',
      );

      // write swagger json file
      const pathToSwaggerJson = resolve(
        pathToSwaggerStaticFolder,
        'swagger.json',
      );
      const swaggerJson = JSON.stringify(document, null, 2);
      writeFileSync(pathToSwaggerJson, swaggerJson);
      console.log(
        `Swagger JSON file written to: '/swagger-static/swagger.json'`,
      );
    }
  } catch (error) {
    console.log(error);
  }
};
start();