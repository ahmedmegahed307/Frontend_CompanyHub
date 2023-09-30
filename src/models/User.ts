import { EntityBase } from "./EntityBase";

export class User extends EntityBase {
  firstName: string;
  middleName: string;
  lastName: string;
  initials: string;
  gender: 'M' | 'F'; // Assuming only Male and Female for simplicity
  password: string;
  passwordSalt: string;
  generatedPassword: string;
  email: string;
  phone: string;
  userRoleId: number;
  companyId: number;
  createdDate: Date;
  modifiedDate: Date | null;
  passwordChangedDate: Date | null;
  resetPasswordKey: string | null;
  resetPasswordKeyValidToDate: Date | null;
  timeZoneId: number;
  cultureInfoCode: string | null;
  addressId: number | null;
  isConfirmed: boolean;
  confirmationKey: string | null;
  confirmationDate: Date | null;
  sessionToken: string | null;
  sessionTokenDate: Date | null;
  profileLogoFilename: string;
  lastDomainName: string;
  outsourcecompanyId: number | null;
  warrantyPeriod: number;

  constructor(
    firstName = "",
    middleName = "",
    lastName = "",
    initials = "",
    gender: 'M' = 'M',
    password = "",
    passwordSalt = "",
    generatedPassword = "",
    email = "",
    phone = "",
    userRoleId = 0,
    companyId = 0,
    createdDate = new Date(),
    modifiedDate: Date | null = null,
    passwordChangedDate: Date | null = null,
    resetPasswordKey: string | null = null,
    resetPasswordKeyValidToDate: Date | null = null,
    timeZoneId = 0,
    cultureInfoCode = "",
    addressId: number | null = null,
    isConfirmed = false,
    confirmationKey: string | null = null,
    confirmationDate: Date | null = null,
    sessionToken: string | null = null,
    sessionTokenDate: Date | null = null,
    profileLogoFilename = "",
    lastDomainName = "",
    outsourcecompanyId: number | null = null,
    warrantyPeriod = 0
  ) {
    super();
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.initials = initials;
    this.gender = gender;
    this.password = password;
    this.passwordSalt = passwordSalt;
    this.generatedPassword = generatedPassword;
    this.email = email;
    this.phone = phone;
    this.userRoleId = userRoleId;
    this.companyId = companyId;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.passwordChangedDate = passwordChangedDate;
    this.resetPasswordKey = resetPasswordKey;
    this.resetPasswordKeyValidToDate = resetPasswordKeyValidToDate;
    this.timeZoneId = timeZoneId;
    this.cultureInfoCode = cultureInfoCode;
    this.addressId = addressId;
    this.isConfirmed = isConfirmed;
    this.confirmationKey = confirmationKey;
    this.confirmationDate = confirmationDate;
    this.sessionToken = sessionToken;
    this.sessionTokenDate = sessionTokenDate;
    this.profileLogoFilename = profileLogoFilename;
    this.lastDomainName = lastDomainName;
    this.outsourcecompanyId = outsourcecompanyId;
    this.warrantyPeriod = warrantyPeriod;
  }
}

export default User;
