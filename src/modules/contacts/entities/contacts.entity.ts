/* eslint-disable prettier/prettier */
import { randomUUID } from 'node:crypto';

export class Contact {
    readonly id: string
    fullName: string
    email: string
    phone: string
    readonly registrationDate: Date
    user_id?: string

    constructor(){
        this.id = randomUUID()
        this.registrationDate = new Date(Date.now())
    }

}
