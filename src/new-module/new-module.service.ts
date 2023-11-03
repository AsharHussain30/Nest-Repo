import { Injectable } from '@nestjs/common';
import { CreateNewModuleDto } from './dto/create-new-module.dto';
import { UpdateNewModuleDto } from './dto/update-new-module.dto';
import { Employee } from './entities/Employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewModuleService {

  constructor(
    @InjectRepository(Employee)
      private usersRepository: Repository<Employee>,
  ) {}
  
  create(createNewModuleDto: CreateNewModuleDto) {
    return this.usersRepository.save(createNewModuleDto);
  }
  
  findAll() {
    return this.usersRepository.find({
        relations:{
        photos:true
      }
    });
  }
  
  findOne(id: number) {
    return this.usersRepository.findOneBy({id});
  }
  
  update(id: number, updateNewModuleDto: UpdateNewModuleDto) {
    return this.usersRepository.update({id}, updateNewModuleDto);
  }
  
  remove(id: number) {
    return this.usersRepository.delete({id});
  }
}
