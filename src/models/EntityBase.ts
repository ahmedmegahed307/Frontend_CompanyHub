export class EntityBase {
  id: number;
  createdAt: Date;
  isDeleted: boolean;
  isActive: boolean;
  cratedById: number;

  constructor(
    id: number = 0,
    createdAt: Date = new Date(),
    isDeleted: boolean = false,
    isActive: boolean = true,
    cratedById: number = 1
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.isDeleted = isDeleted;
    this.isActive = isActive;
    this.cratedById = cratedById;
  }
}
export default EntityBase;