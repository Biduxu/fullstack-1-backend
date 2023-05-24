/* eslint-disable prettier/prettier */

import { Exclude } from "class-transformer"
import { randomUUID } from "crypto"

export class User {
    readonly id: string
    fullName: string
    email: string
    phone: string
    readonly registrationDate: Date

    @Exclude()
    password: string

    constructor(){
        this.id = randomUUID()
        this.registrationDate = new Date(Date.now())
    }
}
