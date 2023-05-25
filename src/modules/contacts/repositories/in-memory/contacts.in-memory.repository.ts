/* eslint-disable prettier/prettier */
import { plainToInstance } from 'class-transformer';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contacts.entity';
import { ContactsRepository } from '../contacts.repository';

export class ContactsInMemoryRepository implements ContactsRepository {
    private database: Contact[] = []

    create(data: CreateContactDto): Contact | Promise<Contact> {
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data
        })

        this.database.push(newContact)

        return plainToInstance(Contact, newContact)
    }

    findAll(): Contact[] | Promise<Contact[]> {
        return plainToInstance(Contact, this.database)
    }

    findOne(id: string): Contact | Promise<Contact> {
        const contact = this.database.findIndex((contact) => contact.id === id)
        return plainToInstance(Contact, contact)
    }

    update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const contactIndex = this.database.findIndex((contact) => contact.id === id)
        this.database[contactIndex] = {
            ...this.database[contactIndex],
            ...data
        }

        return plainToInstance(Contact, this.database[contactIndex])
    }

    delete(id: string): void | Promise<void> {
        const contactIndex = this.database.findIndex((contact) => contact.id === id)
        this.database.splice(contactIndex, 1)
    }
}