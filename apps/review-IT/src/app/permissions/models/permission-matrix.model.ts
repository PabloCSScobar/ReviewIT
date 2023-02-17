import { UserGroup } from './user-group.model';

export type PermissionMatrix = {
  [key in UserGroup]: string[];
};
