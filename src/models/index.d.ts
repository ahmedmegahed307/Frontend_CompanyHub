import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum BillingType {
  INVOICE_PER_VISIT = "INVOICE_PER_VISIT",
  INVOICE_PER_CONTRACT = "INVOICE_PER_CONTRACT"
}

export enum PmFreq {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  SEMI_ANNUAL = "SEMI_ANNUAL",
  ANNUAL = "ANNUAL"
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  OPEN = "OPEN",
  ASSIGENED = "ASSIGENED",
  PENDING = "PENDING",
  CLOSED = "CLOSED"
}

export enum CheckListItemType {
  HEADER = "HEADER",
  SUBHEADER = "SUBHEADER",
  CHECKBOX = "CHECKBOX",
  TEXTBOX = "TEXTBOX",
  DROPBOX = "DROPBOX",
  IMAGE = "IMAGE"
}

export enum SessionType {
  TRAVEL = "TRAVEL",
  WORK = "WORK",
  REMOTE = "REMOTE",
  NONE = "NONE"
}

type EagerCheckListItems = {
  readonly id?: string | null;
  readonly lable?: string | null;
  readonly type?: CheckListItemType | keyof typeof CheckListItemType | null;
  readonly isReq?: boolean | null;
  readonly initData?: string | null;
  readonly dataset?: (string | null)[] | null;
  readonly value?: string | null;
  readonly order?: number | null;
  readonly comment?: string | null;
}

type LazyCheckListItems = {
  readonly id?: string | null;
  readonly lable?: string | null;
  readonly type?: CheckListItemType | keyof typeof CheckListItemType | null;
  readonly isReq?: boolean | null;
  readonly initData?: string | null;
  readonly dataset?: (string | null)[] | null;
  readonly value?: string | null;
  readonly order?: number | null;
  readonly comment?: string | null;
}

export declare type CheckListItems = LazyLoading extends LazyLoadingDisabled ? EagerCheckListItems : LazyCheckListItems

export declare const CheckListItems: (new (init: ModelInit<CheckListItems>) => CheckListItems)

type EagerAttachment = {
  readonly Id: string;
  readonly url?: string | null;
  readonly type?: string | null;
}

type LazyAttachment = {
  readonly Id: string;
  readonly url?: string | null;
  readonly type?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment)

type EagerSignature = {
  readonly id: string;
  readonly name?: string | null;
  readonly position?: string | null;
  readonly user_id?: string | null;
  readonly date?: string | null;
  readonly img?: string | null;
}

type LazySignature = {
  readonly id: string;
  readonly name?: string | null;
  readonly position?: string | null;
  readonly user_id?: string | null;
  readonly date?: string | null;
  readonly img?: string | null;
}

export declare type Signature = LazyLoading extends LazyLoadingDisabled ? EagerSignature : LazySignature

export declare const Signature: (new (init: ModelInit<Signature>) => Signature)

type EagerResolutionItem = {
  readonly text?: string | null;
  readonly date?: string | null;
  readonly userId?: string | null;
}

type LazyResolutionItem = {
  readonly text?: string | null;
  readonly date?: string | null;
  readonly userId?: string | null;
}

export declare type ResolutionItem = LazyLoading extends LazyLoadingDisabled ? EagerResolutionItem : LazyResolutionItem

export declare const ResolutionItem: (new (init: ModelInit<ResolutionItem>) => ResolutionItem)

type EagerAddress = {
  readonly name?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly tel?: string | null;
  readonly contactName?: string | null;
  readonly email?: string | null;
  readonly contactType?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly postcode?: string | null;
  readonly long?: number | null;
  readonly lat?: number | null;
}

type LazyAddress = {
  readonly name?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly tel?: string | null;
  readonly contactName?: string | null;
  readonly email?: string | null;
  readonly contactType?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly postcode?: string | null;
  readonly long?: number | null;
  readonly lat?: number | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerJobType = {
  readonly name?: string | null;
  readonly subtype_id?: string | null;
  readonly subType?: string | null;
  readonly id?: string | null;
}

type LazyJobType = {
  readonly name?: string | null;
  readonly subtype_id?: string | null;
  readonly subType?: string | null;
  readonly id?: string | null;
}

export declare type JobType = LazyLoading extends LazyLoadingDisabled ? EagerJobType : LazyJobType

export declare const JobType: (new (init: ModelInit<JobType>) => JobType)

type EagerPart = {
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly cost?: string | null;
  readonly code?: string | null;
}

type LazyPart = {
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly cost?: string | null;
  readonly code?: string | null;
}

export declare type Part = LazyLoading extends LazyLoadingDisabled ? EagerPart : LazyPart

export declare const Part: (new (init: ModelInit<Part>) => Part)

type EagerContract = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contract, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly description?: string | null;
  readonly jobType?: JobType | null;
  readonly jobSubtype?: string | null;
  readonly estDuration?: string | null;
  readonly pmFreq?: PmFreq | keyof typeof PmFreq | null;
  readonly contractCharge?: number | null;
  readonly startDate?: string | null;
  readonly expiryDate?: string | null;
  readonly billingType?: BillingType | keyof typeof BillingType | null;
  readonly pmActive?: boolean | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContract = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contract, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly description?: string | null;
  readonly jobType?: JobType | null;
  readonly jobSubtype?: string | null;
  readonly estDuration?: string | null;
  readonly pmFreq?: PmFreq | keyof typeof PmFreq | null;
  readonly contractCharge?: number | null;
  readonly startDate?: string | null;
  readonly expiryDate?: string | null;
  readonly billingType?: BillingType | keyof typeof BillingType | null;
  readonly pmActive?: boolean | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contract = LazyLoading extends LazyLoadingDisabled ? EagerContract : LazyContract

export declare const Contract: (new (init: ModelInit<Contract>) => Contract) & {
  copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

type EagerTestData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestData = LazyLoading extends LazyLoadingDisabled ? EagerTestData : LazyTestData

export declare const TestData: (new (init: ModelInit<TestData>) => TestData) & {
  copyOf(source: TestData, mutator: (draft: MutableModel<TestData>) => MutableModel<TestData> | void): TestData;
}

type EagerChatMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly senderId?: string | null;
  readonly reciverId?: string | null;
  readonly isRead?: boolean | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly senderId?: string | null;
  readonly reciverId?: string | null;
  readonly isRead?: boolean | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatMessages = LazyLoading extends LazyLoadingDisabled ? EagerChatMessages : LazyChatMessages

export declare const ChatMessages: (new (init: ModelInit<ChatMessages>) => ChatMessages) & {
  copyOf(source: ChatMessages, mutator: (draft: MutableModel<ChatMessages>) => MutableModel<ChatMessages> | void): ChatMessages;
}

type EagerCheckListModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CheckListModule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly visibleOn?: string | null;
  readonly JobTypes?: string | null;
  readonly isReq?: boolean | null;
  readonly items?: (CheckListItems | null)[] | null;
  readonly connectionId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCheckListModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CheckListModule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly visibleOn?: string | null;
  readonly JobTypes?: string | null;
  readonly isReq?: boolean | null;
  readonly items?: (CheckListItems | null)[] | null;
  readonly connectionId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CheckListModule = LazyLoading extends LazyLoadingDisabled ? EagerCheckListModule : LazyCheckListModule

export declare const CheckListModule: (new (init: ModelInit<CheckListModule>) => CheckListModule) & {
  copyOf(source: CheckListModule, mutator: (draft: MutableModel<CheckListModule>) => MutableModel<CheckListModule> | void): CheckListModule;
}

type EagerSessions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sessions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: SessionType | keyof typeof SessionType | null;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly isActive?: boolean | null;
  readonly jobId?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySessions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sessions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: SessionType | keyof typeof SessionType | null;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly isActive?: boolean | null;
  readonly jobId?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sessions = LazyLoading extends LazyLoadingDisabled ? EagerSessions : LazySessions

export declare const Sessions: (new (init: ModelInit<Sessions>) => Sessions) & {
  copyOf(source: Sessions, mutator: (draft: MutableModel<Sessions>) => MutableModel<Sessions> | void): Sessions;
}

type EagerPartsList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PartsList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly cost?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPartsList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PartsList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly cost?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PartsList = LazyLoading extends LazyLoadingDisabled ? EagerPartsList : LazyPartsList

export declare const PartsList: (new (init: ModelInit<PartsList>) => PartsList) & {
  copyOf(source: PartsList, mutator: (draft: MutableModel<PartsList>) => MutableModel<PartsList> | void): PartsList;
}

type EagerUserType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserType = LazyLoading extends LazyLoadingDisabled ? EagerUserType : LazyUserType

export declare const UserType: (new (init: ModelInit<UserType>) => UserType) & {
  copyOf(source: UserType, mutator: (draft: MutableModel<UserType>) => MutableModel<UserType> | void): UserType;
}

type EagerJobTypesList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTypesList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly subTypeList?: (string | null)[] | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobTypesList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTypesList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly subTypeList?: (string | null)[] | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobTypesList = LazyLoading extends LazyLoadingDisabled ? EagerJobTypesList : LazyJobTypesList

export declare const JobTypesList: (new (init: ModelInit<JobTypesList>) => JobTypesList) & {
  copyOf(source: JobTypesList, mutator: (draft: MutableModel<JobTypesList>) => MutableModel<JobTypesList> | void): JobTypesList;
}

type EagerResolutions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resolutions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResolutions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resolutions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resolutions = LazyLoading extends LazyLoadingDisabled ? EagerResolutions : LazyResolutions

export declare const Resolutions: (new (init: ModelInit<Resolutions>) => Resolutions) & {
  copyOf(source: Resolutions, mutator: (draft: MutableModel<Resolutions>) => MutableModel<Resolutions> | void): Resolutions;
}

type EagerStatusList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatusList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly isActive?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStatusList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatusList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly isActive?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StatusList = LazyLoading extends LazyLoadingDisabled ? EagerStatusList : LazyStatusList

export declare const StatusList: (new (init: ModelInit<StatusList>) => StatusList) & {
  copyOf(source: StatusList, mutator: (draft: MutableModel<StatusList>) => MutableModel<StatusList> | void): StatusList;
}

type EagerJobs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jobs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: JobType | null;
  readonly proirty?: string | null;
  readonly enginer?: (string | null)[] | null;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly schadule?: string | null;
  readonly estDuration?: string | null;
  readonly disc?: string | null;
  readonly notifyClint?: boolean | null;
  readonly getBill?: boolean | null;
  readonly bill?: string | null;
  readonly contractId?: string | null;
  readonly Instruction?: string | null;
  readonly JobParts?: (Part | null)[] | null;
  readonly partsFiles?: (string | null)[] | null;
  readonly jobNumber?: string | null;
  readonly usersID: string;
  readonly adress?: Address | null;
  readonly resolutions?: (ResolutionItem | null)[] | null;
  readonly signatures?: (Signature | null)[] | null;
  readonly attachmentList?: (Attachment | null)[] | null;
  readonly sessionType?: SessionType | keyof typeof SessionType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jobs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: JobType | null;
  readonly proirty?: string | null;
  readonly enginer?: (string | null)[] | null;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly schadule?: string | null;
  readonly estDuration?: string | null;
  readonly disc?: string | null;
  readonly notifyClint?: boolean | null;
  readonly getBill?: boolean | null;
  readonly bill?: string | null;
  readonly contractId?: string | null;
  readonly Instruction?: string | null;
  readonly JobParts?: (Part | null)[] | null;
  readonly partsFiles?: (string | null)[] | null;
  readonly jobNumber?: string | null;
  readonly usersID: string;
  readonly adress?: Address | null;
  readonly resolutions?: (ResolutionItem | null)[] | null;
  readonly signatures?: (Signature | null)[] | null;
  readonly attachmentList?: (Attachment | null)[] | null;
  readonly sessionType?: SessionType | keyof typeof SessionType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Jobs = LazyLoading extends LazyLoadingDisabled ? EagerJobs : LazyJobs

export declare const Jobs: (new (init: ModelInit<Jobs>) => Jobs) & {
  copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs>) => MutableModel<Jobs> | void): Jobs;
}

type EagerUsersObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly adresses?: (Address | null)[] | null;
  readonly JobsClint?: (Jobs | null)[] | null;
  readonly type?: string | null;
  readonly financialContactName?: string | null;
  readonly financialContactEmail?: string | null;
  readonly siteType?: string | null;
  readonly currencyCode?: string | null;
  readonly vatRate?: string | null;
  readonly vatValue?: string | null;
  readonly vatNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly adresses?: (Address | null)[] | null;
  readonly JobsClint: AsyncCollection<Jobs>;
  readonly type?: string | null;
  readonly financialContactName?: string | null;
  readonly financialContactEmail?: string | null;
  readonly siteType?: string | null;
  readonly currencyCode?: string | null;
  readonly vatRate?: string | null;
  readonly vatValue?: string | null;
  readonly vatNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersObject = LazyLoading extends LazyLoadingDisabled ? EagerUsersObject : LazyUsersObject

export declare const UsersObject: (new (init: ModelInit<UsersObject>) => UsersObject) & {
  copyOf(source: UsersObject, mutator: (draft: MutableModel<UsersObject>) => MutableModel<UsersObject> | void): UsersObject;
}