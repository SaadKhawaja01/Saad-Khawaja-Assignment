import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/decorators';
import { ITenantProfileDto, ITenantUpdateDto } from './tenant.dto';

export class TenantProfile implements ITenantProfileDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tenant_name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  zip_code: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  web_url: string;
}

export class TenantUpdateModel implements ITenantUpdateDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tenant_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  zip_code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  web_url: string;
}
