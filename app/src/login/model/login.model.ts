import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, length: 200, name: "Email" })
    email!: string;

    @Column({ length: 100, name: "password" })
    password!: string;

}
