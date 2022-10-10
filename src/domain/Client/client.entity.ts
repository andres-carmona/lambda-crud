import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IClient } from './IClient.dto';

@Entity({name: "clients"})
export class ClientEntity implements IClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name', nullable: false })
  lastname: string;

  @Column({ name: 'dob', nullable: false })
  dateOfBirth: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  country: string;
}
