import { IDatabaseConfigAttributes } from './database-config-attributes.interface';

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
