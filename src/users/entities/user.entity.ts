import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
// The ClassSerializerInterceptor uses the class-transformer package to define how to transform objects.
// Use the @Exclude() decorator to exclude the password field in the UserEntity class:
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updateAt: Date;
}
