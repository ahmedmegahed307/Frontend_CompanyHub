import { EntityBase } from "./EntityBase";

export class Company extends EntityBase {
  name: string;
  email?: string;
  phone?: string;
  fax?: string;
  vatNumber?: string;
  addressId?: number;
  logoFileName?: string;
  termsAndConditions?: string;
  parentCompanyId?: number;
  isSite: boolean;
  isOutsourceCompany: boolean;
  timeZoneId: number = 1;

  constructor(
    name: string,
    email?: string,
    phone?: string,
    fax?: string,
    vatNumber?: string,
    addressId?: number,
    logoFileName?: string,
    termsAndConditions?: string,
    parentCompanyId?: number,
    isSite: boolean = false,
    isOutsourceCompany: boolean = false,
    timeZoneId: number = 1
  ) {
    super();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.fax = fax;
    this.vatNumber = vatNumber;
    this.addressId = addressId;
    this.logoFileName = logoFileName;
    this.termsAndConditions = termsAndConditions;
    this.parentCompanyId = parentCompanyId;
    this.isSite = isSite;
    this.isOutsourceCompany = isOutsourceCompany;
    this.timeZoneId = timeZoneId;
  }
}

export default Company;
