import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { addReflection } from 'grpc-server-reflection';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

const PORT = 3001;

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:' + PORT,
            package: 'auth',
            protoPath: join(__dirname, 'proto/auth.proto'),
        },
    });

    await app.listen();
}
bootstrap().then(() => {
    console.log(`microservice is listening on port ${PORT}`);
});
