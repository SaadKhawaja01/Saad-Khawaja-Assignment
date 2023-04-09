import { Tenant_Profile } from 'src/tenant/tenant.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity()
export class User_Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  department: string;

  @Column()
  designation: string;

  @Column()
  image_url: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  bio: string;

  @Column()
  social_links: string;

  @Column()
  employee_id: string;

  @ManyToOne(() => Tenant_Profile, tenant => tenant.user_profiles)
  tenant: Tenant_Profile;
}
