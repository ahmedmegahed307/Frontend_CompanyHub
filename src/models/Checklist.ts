import Company from "./Company";
import { EntityBase } from "./EntityBase";

export class Checklist extends EntityBase {
    title: string;
    mandatory: boolean = true;
    companyId: number;
    
    // Virtual relationships
    company?: Company;

    constructor(
        title = "",
        companyId = 0,
        mandatory: boolean = true
    ) {
        super();
        this.title = title;
        this.companyId = companyId;
        this.mandatory = mandatory;
    }
}