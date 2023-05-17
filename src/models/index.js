// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CheckListItemType = {
  "HEADER": "HEADER",
  "SUBHEADER": "SUBHEADER",
  "CHECKBOX": "CHECKBOX",
  "TEXTBOX": "TEXTBOX",
  "DROPBOX": "DROPBOX",
  "IMAGE": "IMAGE"
};

const SessionType = {
  "TRAVEL": "TRAVEL",
  "WORK": "WORK",
  "REMOTE": "REMOTE",
  "NONE": "NONE"
};

const { CheckListModule, Sessions, PartsList, UserType, JobTypesList, Resolutions, StatusList, Jobs, UsersObject, CheckListItems, Attachment, Signature, ResolutionItem, Address, JobType, Part } = initSchema(schema);

export {
  CheckListModule,
  Sessions,
  PartsList,
  UserType,
  JobTypesList,
  Resolutions,
  StatusList,
  Jobs,
  UsersObject,
  CheckListItemType,
  SessionType,
  CheckListItems,
  Attachment,
  Signature,
  ResolutionItem,
  Address,
  JobType,
  Part
};