/* eslint-disable prettier/prettier */

import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator"

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    fullName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    phone: string

    @IsString()
    @IsNotEmpty()
    user_id?: string
}