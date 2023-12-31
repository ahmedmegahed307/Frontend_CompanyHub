import { EntityBase } from "./EntityBase";
import Site from "./Site";

export class Client extends EntityBase {
  name?: string;
  code?: string;
  primaryContactName?: string;
  primaryContactEmail?: string;
  primaryContactPhone?: string;
  primaryFinancialName?: string;
  primaryFinancialEmail?: string;
  currency?: string;
  vatRate?: string;
  vatNumber?: string;
  vatValue?: string;
  fax?: string;
  logoUrl?: string;
  email?: string;
  phone?: string;
  companyId?: number;
  siteType?: string;
  site?: Site;

  constructor(
    name = "",
    code = "",
    primaryContactName = "",
    primaryContactEmail = "",
    primaryContactPhone = "",
    primaryFinancialName = "",
    primaryFinancialEmail = "",
    currency = "",
    vatRate = "",
    vatNumber = "",
    vatValue = "",
    fax = "",
    logoUrl = "",
    email = "",
    phone = "",
    companyId = 0,
    siteType = ""
  ) {
    super();
    this.name = name;
    this.code = code;
    this.primaryContactName = primaryContactName;
    this.primaryContactEmail = primaryContactEmail;
    this.primaryContactPhone = primaryContactPhone;
    this.primaryFinancialName = primaryFinancialName;
    this.primaryFinancialEmail = primaryFinancialEmail;
    this.currency = currency;
    this.vatRate = vatRate;
    this.vatNumber = vatNumber;
    this.vatValue = vatValue;
    this.fax = fax;
    this.logoUrl = logoUrl;
    this.email = email;
    this.phone = phone;
    this.companyId = companyId;
    this.siteType = siteType;
  }
}

export default Client;
