import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



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
  readonly long?: string | null;
  readonly lat?: string | null;
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
  readonly long?: string | null;
  readonly lat?: string | null;
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
  readonly quantity?: string | null;
  readonly cost?: string | null;
  readonly code?: string | null;
}

type LazyPart = {
  readonly name?: string | null;
  readonly quantity?: string | null;
  readonly cost?: string | null;
  readonly code?: string | null;
}

export declare type Part = LazyLoading extends LazyLoadingDisabled ? EagerPart : LazyPart

export declare const Part: (new (init: ModelInit<Part>) => Part)

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
  readonly status?: string | null;
  readonly schadule?: string | null;
  readonly estDuration?: string | null;
  readonly disc?: string | null;
  readonly notifyClint?: boolean | null;
  readonly getBill?: boolean | null;
  readonly bill?: string | null;
  readonly contractId?: string | null;
  readonly Instruction?: string | null;
  readonly JobParts?: Part | null;
  readonly partsFiles?: (string | null)[] | null;
  readonly jobNumber?: string | null;
  readonly usersID: string;
  readonly JobsEngs?: (JobsUsersObject | null)[] | null;
  readonly adress?: Address | null;
  readonly resolutions?: (ResolutionItem | null)[] | null;
  readonly signatures?: (Signature | null)[] | null;
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
  readonly status?: string | null;
  readonly schadule?: string | null;
  readonly estDuration?: string | null;
  readonly disc?: string | null;
  readonly notifyClint?: boolean | null;
  readonly getBill?: boolean | null;
  readonly bill?: string | null;
  readonly contractId?: string | null;
  readonly Instruction?: string | null;
  readonly JobParts?: Part | null;
  readonly partsFiles?: (string | null)[] | null;
  readonly jobNumber?: string | null;
  readonly usersID: string;
  readonly JobsEngs: AsyncCollection<JobsUsersObject>;
  readonly adress?: Address | null;
  readonly resolutions?: (ResolutionItem | null)[] | null;
  readonly signatures?: (Signature | null)[] | null;
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
  readonly jobss?: (JobsUsersObject | null)[] | null;
  readonly type?: string | null;
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
  readonly jobss: AsyncCollection<JobsUsersObject>;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersObject = LazyLoading extends LazyLoadingDisabled ? EagerUsersObject : LazyUsersObject

export declare const UsersObject: (new (init: ModelInit<UsersObject>) => UsersObject) & {
  copyOf(source: UsersObject, mutator: (draft: MutableModel<UsersObject>) => MutableModel<UsersObject> | void): UsersObject;
}

type EagerJobsUsersObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobsUsersObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobsId?: string | null;
  readonly usersObjectId?: string | null;
  readonly jobs: Jobs;
  readonly usersObject: UsersObject;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobsUsersObject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobsUsersObject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobsId?: string | null;
  readonly usersObjectId?: string | null;
  readonly jobs: AsyncItem<Jobs>;
  readonly usersObject: AsyncItem<UsersObject>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobsUsersObject = LazyLoading extends LazyLoadingDisabled ? EagerJobsUsersObject : LazyJobsUsersObject

export declare const JobsUsersObject: (new (init: ModelInit<JobsUsersObject>) => JobsUsersObject) & {
  copyOf(source: JobsUsersObject, mutator: (draft: MutableModel<JobsUsersObject>) => MutableModel<JobsUsersObject> | void): JobsUsersObject;
}