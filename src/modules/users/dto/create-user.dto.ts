/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator"

export class CreateUserDto {

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

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ["transform"]
    })
    password: string

}
