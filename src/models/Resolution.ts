import { EntityBase } from "./EntityBase";

export class Resolution extends EntityBase {
  name?: string;

  constructor(name?: string) {
    super();

    this.name = name;
  }
}

export default Resolution;
