export interface IGenericRepository<T>{
    getAll(): Promise<T[]>;
    getByOptions(options: object): Promise<T[]>;
    create(data: object): Promise<T>;
    update(data: object, id: number|string): Promise<any>;
    delete(id: number|string): Promise<any>;
}