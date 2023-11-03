import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';


@Injectable()
export class PhotosService {

  constructor(
    @InjectRepository(Photo)
      private usersRepository: Repository<Photo>,
  ) {}
  
  create(createPhotoDto: CreatePhotoDto) {
    return this.usersRepository.save(createPhotoDto);
  }
  
  findAll() {
    return this.usersRepository.find({
      relations:{
        employee:true
      }
    });
  }
  
  findOne(id: number) {
    return this.usersRepository.findOneBy({id});
  }
  
  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return this.usersRepository.update({id}, updatePhotoDto);
  }
  
  remove(id: number) {
    return this.usersRepository.delete({id});
  }
}
