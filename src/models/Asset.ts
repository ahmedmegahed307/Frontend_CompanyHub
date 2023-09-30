import Address from "./Address";
import AssetType from "./AssetType";
import AssetUnit from "./AssetUnit";
import { Checklist } from "./Checklist";
import Company from "./Company";
import Contact from "./Contact";
import { EntityBase } from "./EntityBase";
import User from "./User";
import Warranty from "./Warranty";

export class Asset extends EntityBase {
    assetCode: number;
    outdoorUnitId: number;
    indoorUnitId: number;
    assetTypeId: number = 1; // Integrated
    engineerId: number;
    addressId: number;
    homeownerContactId: number | null;
    warrantyId: number | null;
    checklistId: number;
    outsourceCompanyId: number | null;
    installationDate: Date = new Date();

    // Virtual relationships, assuming similar DTOs are created for these in TypeScript.
    outdoorUnit?: AssetUnit;
    indoorUnit?: AssetUnit;
    assetType?: AssetType;
    engineer?: User;
    address?: Address;
    homeownerContact?: Contact;
    warranty?: Warranty;
    outsourceCompany?: Company;
    checklist?: Checklist;

    constructor(
        assetCode = 0,
        outdoorUnitId = 0,
        indoorUnitId = 0,
        assetTypeId = 1,
        engineerId = 0,
        addressId = 0,
        homeownerContactId: number | null = null,
        warrantyId: number | null = null,
        checklistId = 0,
        outsourceCompanyId: number | null = null
    ) {
        super();
        this.assetCode = assetCode;
        this.outdoorUnitId = outdoorUnitId;
        this.indoorUnitId = indoorUnitId;
        this.assetTypeId = assetTypeId;
        this.engineerId = engineerId;
        this.addressId = addressId;
        this.homeownerContactId = homeownerContactId;
        this.warrantyId = warrantyId;
        this.checklistId = checklistId;
        this.outsourceCompanyId = outsourceCompanyId;
    }
}

// Assuming you also have corresponding TypeScript models for AssetUnit, AssetType, Address, Contact, Warranty, Company, and Checklist.
