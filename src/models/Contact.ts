import Address from "./Address";
import Company from "./Company";
import { EntityBase } from "./EntityBase";

export class Contact extends EntityBase {
    companyId: number;
    name?: string;
    email?: string;
    phone?: string;
    addressId?: number;

    // Virtual relationships, assuming you will create similar DTOs in TypeScript.
    company?: Company;
    address?: Address;

    constructor(
        companyId = 0,
        name?: string,
        email?: string,
        phone?: string,
        addressId?: number
    ) {
        super();
        this.companyId = companyId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.addressId = addressId;
    }
}

// Assuming you also have corresponding TypeScript models for Company and Address.

export default Contact;
