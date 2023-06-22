// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BillingType = {
  "INVOICE_PER_VISIT": "INVOICE_PER_VISIT",
  "INVOICE_PER_CONTRACT": "INVOICE_PER_CONTRACT"
};

const PmFreq = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "QUARTERLY": "QUARTERLY",
  "SEMI_ANNUAL": "SEMI_ANNUAL",
  "ANNUAL": "ANNUAL"
};

const JobStatus = {
  "CANCELLED": "CANCELLED",
  "OPEN": "OPEN",
  "ASSIGENED": "ASSIGENED",
  "PENDING": "PENDING",
  "CLOSED": "CLOSED"
};

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

const { Contract, TestData, ChatMessages, CheckListModule, Sessions, PartsList, UserType, JobTypesList, Resolutions, StatusList, Jobs, UsersObject, CheckListItems, Attachment, Signature, ResolutionItem, Address, JobType, Part } = initSchema(schema);

export {
  Contract,
  TestData,
  ChatMessages,
  CheckListModule,
  Sessions,
  PartsList,
  UserType,
  JobTypesList,
  Resolutions,
  StatusList,
  Jobs,
  UsersObject,
  BillingType,
  PmFreq,
  JobStatus,
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