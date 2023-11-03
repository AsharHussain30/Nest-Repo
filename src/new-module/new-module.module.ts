import { Module } from '@nestjs/common';
import { NewModuleService } from './new-module.service';
import { NewModuleController } from './new-module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/Employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee])
  ],
  controllers: [NewModuleController],
  providers: [NewModuleService],
})
export class NewModuleModule {}
