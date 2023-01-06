import { User } from 'src/__db__/entities/user.entity';

export const authProviders = [{
    provide: 'AUTH_REPOSITORY',
    useValue: User,
}];