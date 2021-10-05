import { EntityRepository, Repository } from "typeorm";
import { User } from "@/user/entity/user.entity";
import { CreateUserDto } from "@/user/dto/user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findUserByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email } });
  }

  findUserById(userId: number): Promise<User> {
    return this.findOne(userId);
  }

  createUser(user: CreateUserDto): void {
    this.insert(user);
  }
}
