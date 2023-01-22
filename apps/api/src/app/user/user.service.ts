import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async addUser(user: CreateUserDto) {
    const newUser = this.usersRepository.create({
      ...user,
      reputation: 0,
      avatarLink:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Squint&eyebrowType=UpDown&mouthType=Default&skinColor=Light',
    });
    return await this.usersRepository.save(newUser);
  }
  async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
