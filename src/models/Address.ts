import EntityBase from "./EntityBase";

export class Address extends EntityBase {
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3?: string | null;
    AddressLine4?: string | null;
    City: string;
    EirCode: string;
    State: string;
    CountryRegionCode?: string | null;

    constructor() {
        super();
        this.AddressLine1 = "";
        this.AddressLine2 = "";
        this.AddressLine3 = null; // Initialized as null to match the optional type
        this.AddressLine4 = null; // Initialized as null to match the optional type
        this.City = "";
        this.EirCode = "";
        this.State = "";
        this.CountryRegionCode = null; // Initialized as null to match the optional type
    }
}

export default Address;
