import { EntityBase } from "./EntityBase";

export class JobSubType extends EntityBase {
  name?: string;
  constructor(
    id: number = 0,
    createdAt: Date = new Date(),
    isDeleted: boolean = false,
    isActive: boolean = true,
    createdByUserId: number,
    name?: string
  ) {
    super(id, createdAt, isDeleted, isActive, createdByUserId);

    this.name = name;
  }
}

export default JobSubType;
