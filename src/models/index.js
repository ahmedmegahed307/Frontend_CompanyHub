// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserType, JobTypesList, Resolutions, StatusList, Jobs, UsersObject, JobsUsersObject, Signature, ResolutionItem, Address, JobType, Part } = initSchema(schema);

export {
  UserType,
  JobTypesList,
  Resolutions,
  StatusList,
  Jobs,
  UsersObject,
  JobsUsersObject,
  Signature,
  ResolutionItem,
  Address,
  JobType,
  Part
};