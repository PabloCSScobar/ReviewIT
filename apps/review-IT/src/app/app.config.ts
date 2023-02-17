import { PermissionMatrix } from './permissions/models/permission-matrix.model';
import { UserGroup } from './permissions/models/user-group.model';
import { PermissionAreas } from './permissions/models/permission-areas.model';

export const APP_PERMISSION_MATRIX: PermissionMatrix = {
  [UserGroup.NOT_LOGGED_IN]: [
    PermissionAreas.POST_LIST_READ,
    PermissionAreas.POST_DETAILS_READ,
  ],
  [UserGroup.LOGGED_IN]: [
    PermissionAreas.POST_CREATE,
    PermissionAreas.ANSWER_CREATE,
  ],
  [UserGroup.POST_AUTHOR]: [PermissionAreas.POST_UPDATE],
  [UserGroup.ANSWER_AUTHOR]: [PermissionAreas.ANSWER_UPDATE],
  [UserGroup.ADMIN]: [
    PermissionAreas.POST_UPDATE,
    PermissionAreas.POST_DELETE,
    PermissionAreas.ANSWER_UPDATE,
    PermissionAreas.ANSWER_DELETE,
  ],
};
