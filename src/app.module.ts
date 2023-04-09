import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tenant_Profile } from './tenant/tenant.entity';
import { TenantModule } from './tenant/tenant.module';
import { User_Profile } from './user/user.entity';
import { UserModule } from './user/user.module';

//for Sql Db
const DB = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Assignment',
  entities: [Tenant_Profile,User_Profile],
  synchronize: true,
});

// all modules imports here
@Module({
  imports: [DB, TenantModule, UserModule],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
