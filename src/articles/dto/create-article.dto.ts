import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
