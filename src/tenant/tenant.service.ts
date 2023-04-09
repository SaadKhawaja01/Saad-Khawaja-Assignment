import { Injectable } from '@nestjs/common';
import { ITenantProfileDto, ITenantUpdateDto } from './tenant.dto';
import { Tenant_Profile } from './tenant.entity';
import {  TenantUpdateModel } from './tenant.model';

@Injectable()
export class TenantService {
  async findAll(): Promise<Tenant_Profile[]> {
    return Tenant_Profile.find();
  }

  async create(tenantProfileDto: ITenantProfileDto) {
    const tentant = new Tenant_Profile();
    tentant.tenant_name = tenantProfileDto.tenant_name;
    tentant.address = tenantProfileDto.address;
    tentant.city = tenantProfileDto.city;
    tentant.state = tenantProfileDto.state;
    tentant.country = tenantProfileDto.country;
    tentant.zip_code = tenantProfileDto.zip_code;
    tentant.phone = tenantProfileDto.phone;
    tentant.web_url = tenantProfileDto.web_url;

    await tentant.save();
    return Tenant_Profile.findOneBy({
      tenant_name: tenantProfileDto.tenant_name,
    });
  }

  async findOne(id: string): Promise<Tenant_Profile> {
    return Tenant_Profile.findOneBy({ tenant_id: id });
  }

  async update(
    id: string,
    tenantProfile: TenantUpdateModel,
  ): Promise<Tenant_Profile> {
    await Tenant_Profile.update(id, tenantProfile);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await Tenant_Profile.delete(id);
  }
}
