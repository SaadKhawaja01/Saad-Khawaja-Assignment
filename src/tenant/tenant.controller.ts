import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ITenantUpdateDto } from './tenant.dto';
import { TenantProfile,  TenantUpdateModel } from './tenant.model';
import { TenantService } from './tenant.service';

@ApiTags('Tenant')
@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async findAll() {
    return await this.tenantService.findAll();
  }

  @Post()
  async create(@Body() tenantProfileDto: TenantProfile) {
    return await this.tenantService.create(tenantProfileDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tenantService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() tenantProfileDto: TenantUpdateModel,
  ) {
    return await this.tenantService.update(id, tenantProfileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let entry = await this.findOne(id)
   await this.tenantService.remove(id);
   return entry
  }
}
