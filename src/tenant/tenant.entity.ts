import { User_Profile } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Tenant_Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  tenant_id: string;

  @Column()
  tenant_name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zip_code: string;

  @Column()
  phone: string;

  @Column()
  web_url: string;

  @OneToMany(() => User_Profile, (user_profile) => user_profile.tenant)
  user_profiles: User_Profile[];
}
