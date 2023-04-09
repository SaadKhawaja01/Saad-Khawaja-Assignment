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
import { UserProfile, UserUpdateModel } from './user.model';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() userProfileDto: UserProfile) {
    return await this.userService.create(userProfileDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userProfileDto: UserUpdateModel,
  ) {
    return await this.userService.update(id, userProfileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let entry = await this.findOne(id);
    await this.userService.remove(id);
    return entry;
  }
}
