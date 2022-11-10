import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reputation: number;

  @Column()
  username: string;

  @Column()
  avatar_link: string;
}
