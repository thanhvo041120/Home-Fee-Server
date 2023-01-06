import { Inject, Injectable } from '@nestjs/common';
import { where } from 'sequelize';
import { FindUserResDto } from 'src/core/dtos/user';
import { IGenericRepository } from 'src/core/interfaces/generic-repository/repository.interface';
import { User } from 'src/core/models/user';
import { User as UserEntity } from 'src/__db__/entities/user.entity';

@Injectable()
export class UserService implements IGenericRepository<UserEntity> {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepositories: typeof UserEntity,
  ) {}
  public async getAll(): Promise<UserEntity[]> {
    const result: UserEntity[] = await this.authRepositories.findAll({raw: true});
    return result;
  }
  public async getByOptions(options: object): Promise<UserEntity[]> {
    const result: UserEntity[] = await this.authRepositories.findAll({
      where: {
        ...options,
      },
      raw: true,
    });
    return result;
  }
  public async create(data: object): Promise<UserEntity> {
    const result = await this.authRepositories.create(data);
    return result.dataValues;
  }
  public async update(data: object, id: string | number): Promise<any> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string | number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
