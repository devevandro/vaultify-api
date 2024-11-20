import { UserUseCase } from '../../../domain/useCases/UserUseCase';
import { UserProvider } from '../../../infra/user/UserProvider';

export class UserFactory extends UserUseCase {
  constructor() {
    const userData = new UserProvider();
    super({ userData });
  }
}
