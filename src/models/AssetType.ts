import { EntityBase } from "./EntityBase";

export class AssetType extends EntityBase {
    type: string;

    constructor(type = "") {
        super();
        this.type = type;
    }
}

export default AssetType;
