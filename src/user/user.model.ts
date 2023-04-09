import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import {  IUserProfileDto, IUserUpdateDto } from './user.dto';

export class UserProfile implements IUserProfileDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  department: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  designation: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image_url: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bio: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  social_links: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  employee_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
}

export class UserUpdateModel implements IUserUpdateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  department: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  designation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image_url: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bio: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  social_links: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
}
