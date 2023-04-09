import { Injectable } from '@nestjs/common';
import { IUserProfileDto } from './user.dto';
import { User_Profile } from './user.entity';
import { UserUpdateModel } from './user.model';

@Injectable()
export class UserService {



    async findAll(): Promise<User_Profile[]> {
        return User_Profile.find();
      }
    
      async create(userProfileDto: IUserProfileDto) {
        const user = new User_Profile();
     user.first_name = userProfileDto.first_name
     user.last_name = userProfileDto.last_name
    user.department = userProfileDto.department
    user.designation = userProfileDto.designation
    user.image_url = userProfileDto.image_url
    user.city = userProfileDto.city
    user.country = userProfileDto.country
    user.bio = userProfileDto.bio
    user.social_links = userProfileDto.social_links
    user.employee_id = userProfileDto.employee_id

    await user.save()
    
        return User_Profile.findOneBy({
          first_name: userProfileDto.first_name,
        });
      }
    
      async findOne(id: string): Promise<User_Profile> {
        return User_Profile.findOneBy({ user_id: id });
      }
    
      async update(
        id: string,
        userProfile: UserUpdateModel,
      ): Promise<User_Profile> {
        await User_Profile.update(id, userProfile);
        return this.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await User_Profile.delete(id);
      }

}
