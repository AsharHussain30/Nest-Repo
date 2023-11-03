import { Photo } from "src/photos/entities/photo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;    

    @OneToMany(() => Photo,(photo) => photo.employee)
    photos: Photo[];
}
