import { EntityBase } from "./EntityBase";

export class Job extends EntityBase {
  assetId: number | null;
  jobTypeId: number;
  companyId: number;
  contactId: number | null;
  addressId: number | null;
  statusId: number;
  priorityId: number;
  jobDate: Date;
  assignedDate: Date | null;
  createdDate: Date;
  modifiedDate: Date | null;
  estimatedDuration: number | null;
  cancelReason: string;
  instruction: string;
  isGenerated: boolean;
  checklistId: number | null;

  constructor(
    assetId: number | null = null,
    jobTypeId: number = 0,
    companyId: number = 0,
    contactId: number | null = null,
    addressId: number | null = null,
    statusId: number = 0,
    priorityId: number = 0,
    jobDate: Date = new Date(),
    assignedDate: Date | null = null,
    createdDate: Date = new Date(),
    modifiedDate: Date | null = null,
    estimatedDuration: number | null = null,
    cancelReason: string = "",
    instruction: string = "",
    isGenerated: boolean = false,
    checklistId: number | null = null
  ) {
    super();
    this.assetId = assetId;
    this.jobTypeId = jobTypeId;
    this.companyId = companyId;
    this.contactId = contactId;
    this.addressId = addressId;
    this.statusId = statusId;
    this.priorityId = priorityId;
    this.jobDate = jobDate;
    this.assignedDate = assignedDate;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.estimatedDuration = estimatedDuration;
    this.cancelReason = cancelReason;
    this.instruction = instruction;
    this.isGenerated = isGenerated;
    this.checklistId = checklistId;
  }
  // Convert a plain object to an instance of JobDto
  static fromJSON(data: any): Job {
    return new Job(
      data.assetId,
      data.jobTypeId,
      data.companyId,
      data.contactId,
      data.addressId,
      data.statusId,
      data.priorityId,
      new Date(data.jobDate),
      data.assignedDate ? new Date(data.assignedDate) : null,
      new Date(data.createdDate),
      data.modifiedDate ? new Date(data.modifiedDate) : null,
      data.estimatedDuration,
      data.cancelReason,
      data.instruction,
      data.isGenerated,
      data.checklistId
    );
  }

  // Convert an instance of JobDto to a plain object
  toJSON(): any {
    return {
      assetId: this.assetId,
      jobTypeId: this.jobTypeId,
      companyId: this.companyId,
      contactId: this.contactId,
      addressId: this.addressId,
      statusId: this.statusId,
      priorityId: this.priorityId,
      jobDate: this.jobDate.toISOString(),
      assignedDate: this.assignedDate ? this.assignedDate.toISOString() : null,
      createdDate: this.createdDate.toISOString(),
      modifiedDate: this.modifiedDate ? this.modifiedDate.toISOString() : null,
      estimatedDuration: this.estimatedDuration,
      cancelReason: this.cancelReason,
      instruction: this.instruction,
      isGenerated: this.isGenerated,
      checklistId: this.checklistId
    };
  }
}
