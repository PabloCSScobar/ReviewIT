import { PermissionMatrix } from './permissions/models/permission-matrix.model';
import { UserGroup } from './permissions/models/user-group.model';

export const APP_PERMISSION_MATRIX: PermissionMatrix = {
    [UserGroup.NOT_LOGGED_IN]: [],
    [UserGroup.LOGGED_IN]: [],
    [UserGroup.POST_AUTHOR]: [],
    [UserGroup.ANSWER_AUTHOR]: [],
    [UserGroup.BASIC]: [],
    [UserGroup.ADMIN]: [],
}