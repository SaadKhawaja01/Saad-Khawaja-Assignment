export interface ITenantProfileDto {
  tenant_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone: string;
  web_url: string;
}

export interface ITenantUpdateDto {
  tenant_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  web_url: string;
}
