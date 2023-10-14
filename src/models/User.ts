import { EntityBase } from "./EntityBase";

export class User extends EntityBase {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  initials?: string;
  passwordHash?: string;
  email?: string;
  phone?: string;
  role?: string;
  userRoleId?: number;
  companyId?: number;
  createdDate?: Date;
  modifiedDate?: Date | null;
  passwordChangedDate?: Date | null;
  resetPasswordKey?: string | null;
  resetPasswordKeyValidToDate?: Date | null;
  timeZoneId?: number;
  cultureInfoCode?: string | null;
  addressId?: number | null;
  isConfirmed?: boolean;
  confirmationKey?: string | null;
  confirmationDate?: Date | null;
  sessionToken?: string | null;
  sessionTokenDate?: Date | null;
  profileLogoFilename?: string;

  constructor(
    firstName = "",
    middleName = "",
    lastName = "",
    initials = "",
    passwordHash = "",
    email = "",
    phone = "",
    userRoleId = 0,
    role = "",
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
    profileLogoFilename = ""
  ) {
    super();
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.initials = initials;
    this.passwordHash = passwordHash;

    this.email = email;
    this.phone = phone;
    this.userRoleId = userRoleId;
    this.role = role;

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
  }
}

export default User;
