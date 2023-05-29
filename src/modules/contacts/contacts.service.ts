/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { ContactsRepository } from "./repositories/contacts.repository"
import { CreateContactDto } from "./dto/create-contact.dto"
import { UpdateContactDto } from "./dto/update-contact.dto"

@Injectable()
export class ContactsService {
    constructor(private contactsRepository: ContactsRepository) {}
    async create(createContactDto: CreateContactDto, userId: string){
        const contact = await this.contactsRepository.create(createContactDto, userId);

        return contact
    }

    async findAll(userId: string) {
        const contacts = await this.contactsRepository.findAll(userId);
        return contacts
    }

    async findOne(id: string) {
        const contact = await this.contactsRepository.findOne(id);

        return contact
    }

    async update(id: string, updateContactDto: UpdateContactDto) {
        const contact = await this.contactsRepository.update(id, updateContactDto);

        return contact
    }

    async remove(id: string) {
        await this.contactsRepository.delete(id);
        return;
    }
}
