import EntityBase from "./EntityBase";

export class Site extends EntityBase {
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postCode?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  clientId?: number;
  constructor() {
    super();
    this.name = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.city = "";
    this.postCode = "";
    this.contactName = "";
    this.contactEmail = "";
    this.contactPhone = "";
    this.clientId = 0;
  }
}

export default Site;
