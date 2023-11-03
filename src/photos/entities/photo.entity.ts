import { Employee } from "src/new-module/entities/Employee.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employeeId: number;

    @Column()
    photo: string;

    @ManyToOne(() => Employee)
    @JoinColumn({  name: 'employeeId'})
    employee: Employee;
}
