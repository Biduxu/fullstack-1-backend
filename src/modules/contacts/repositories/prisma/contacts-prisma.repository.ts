/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { ContactsRepository } from "../contacts.repository"
import { CreateContactDto } from "../../dto/create-contact.dto"
import { UpdateContactDto } from "../../dto/update-contact.dto"
import { Contact } from "../../entities/contacts.entity"
import { PrismaService } from "src/database/prisma.service"

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma: PrismaService){}
    async create(data: CreateContactDto, userId: string): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })

        const newContact = await this.prisma.contact.create({
            data: {
                id: contact.id,
                fullName: contact.fullName,
                email: contact.email,
                phone: contact.phone,
                registrationDate: contact.registrationDate,
                userId: userId
            }
        })

        return newContact
    }
    async findAll(userId: string): Promise<Contact[]> {
        const contacts = await this.prisma.contact.findMany({
            where: {userId}
        })

        return contacts
    }
    async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        })

        return contact
    }
    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const contact = await this.prisma.contact.update({
            where: {id},
            data: {...data}
        })

        return contact
    }
    async delete(id: string): Promise<void> {
        await this.prisma.contact.delete({
            where: {id}
        })
    }
    
}