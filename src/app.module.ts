import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewModuleModule } from './new-module/new-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './new-module/entities/Employee.entity';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/entities/photo.entity';

@Module({
  imports: [NewModuleModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'test-db',
    entities: [Employee, Photo],
    synchronize: true,
  }), PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
