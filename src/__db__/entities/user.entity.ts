import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fullname: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phonenumber: string;
}