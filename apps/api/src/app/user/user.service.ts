import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async addUser(user: CreateUserDto) {
    const newUser = this.usersRepository.create({
      ...user,
      reputation: 0,
      avatar_link:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Squint&eyebrowType=UpDown&mouthType=Default&skinColor=Light',
    });
    return await this.usersRepository.save(newUser);
  }
  async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
