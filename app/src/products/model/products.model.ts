import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, length: 100, name: "Name" })
    name!: string;

    @Column({ length: 250, name: "Description" })
    description!: string;

    @Column({ name: "Price" })
    price!: number;

}