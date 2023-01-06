import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  _fullname: string;

  @Unique(true)
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  _email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  _password: string;

  @Unique(true)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  _phonenumber: string;

}
