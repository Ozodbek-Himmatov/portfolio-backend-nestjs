"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const fs_1 = require("fs");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
        const config = new swagger_1.DocumentBuilder()
            .setTitle('NestJS TEST')
            .setDescription('REST API')
            .setVersion('1.0.0')
            .addTag('NodeJS, NestJS, MongoDB, mongoose')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, document, {
            customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
            customJs: [
                'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
                'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
            ],
        });
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
        if (process.env.NODE_ENV === 'development') {
            const pathToSwaggerStaticFolder = (0, path_1.resolve)(process.cwd(), 'swagger-static');
            const pathToSwaggerJson = (0, path_1.resolve)(pathToSwaggerStaticFolder, 'swagger.json');
            const swaggerJson = JSON.stringify(document, null, 2);
            (0, fs_1.writeFileSync)(pathToSwaggerJson, swaggerJson);
            console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
        }
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map