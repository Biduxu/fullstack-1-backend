/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/swagger"
import { CreateContactDto } from "./create-contact.dto"

export class UpdateContactDto extends PartialType(CreateContactDto) {}