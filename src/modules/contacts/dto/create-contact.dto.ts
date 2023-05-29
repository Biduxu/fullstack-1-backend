/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator"

export class CreateContactDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    fullName: string

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    phone: string
}