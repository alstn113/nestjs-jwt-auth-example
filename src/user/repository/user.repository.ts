import { EntityRepository, Repository } from "typeorm";
import { User } from "@/user/entity/user.entity";
import { CreateUserRequest } from "@/user/dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findUserByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email } });
  }

  findUserById(userId: number): Promise<User> {
    return this.findOne(userId);
  }

  createUser(user: CreateUserRequest): void {
    this.insert(user);
  }
}
