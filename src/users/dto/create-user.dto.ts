/* eslint-disable prettier/prettier */

import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator"

export class CreateUserDto {
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
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ["trasnform"]
    })
    password: string

}
