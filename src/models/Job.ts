import Client from "./Client";
import { EntityBase } from "./EntityBase";
import JobType from "./JobType";
import Site from "./Site";
import User from "./User";

export class Job extends EntityBase {
  public companyId?: number;
  public clientId?: number | null;
  public siteId?: number | null;
  public contactId?: number | null;
  public addressId?: number | null;
  public jobTypeId?: number | null;
  public jobSubTypeId?: number | null;
  public description?: string | null;
  public instruction?: string | null;
  public engineerId?: number | null;
  public jobStatusId?: number | null;
  public jobPriorityId?: number | null;
  public jobDate?: Date | null;
  public scheduleDateEnd?: Date | null;
  public assignedDate?: Date | null;
  public modifiedDate?: Date | null;
  public estimatedDuration?: number | null;
  public jobType?: JobType | null;
  public client?: Client | null;
  public site?: Site | null;
  public engineer?: User | null;

  constructor(
    companyId?: number,
    clientId?: number | null,
    siteId?: number | null,
    contactId?: number | null,
    addressId?: number | null,
    jobTypeId?: number | null,
    jobSubTypeId?: number | null,
    description?: string | null,
    instruction?: string | null,
    engineerId?: number | null,
    jobStatusId?: number | null,
    jobPriorityId?: number | null,
    jobDate?: Date | null,
    scheduleDateEnd?: Date | null,
    assignedDate?: Date | null,
    modifiedDate?: Date | null,
    estimatedDuration?: number | null,
    jobType?: JobType | null,
    client?: Client | null,
    site?: Site | null,
    engineer?: User | null,
    id?: number
  ) {
    super();
    this.companyId = companyId;
    this.clientId = clientId;
    this.siteId = siteId;
    this.contactId = contactId;
    this.addressId = addressId;
    this.jobTypeId = jobTypeId;
    this.jobSubTypeId = jobSubTypeId;
    this.description = description;
    this.instruction = instruction;
    this.engineerId = engineerId;
    this.jobStatusId = jobStatusId;
    this.jobPriorityId = jobPriorityId;
    this.jobDate = jobDate;
    this.scheduleDateEnd = scheduleDateEnd;
    this.assignedDate = assignedDate;
    this.modifiedDate = modifiedDate;
    this.estimatedDuration = estimatedDuration;
    this.jobType = jobType;
    this.client = client;
    this.site = site;
    this.engineer = engineer;
    this.id = id;
  }
}
