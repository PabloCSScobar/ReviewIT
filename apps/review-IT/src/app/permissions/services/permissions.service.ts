import { inject, Injectable, InjectionToken } from '@angular/core';
import { User } from '../../core/models/user.model';
import { PermissionMatrix } from '../models/permission-matrix.model';
import { AuthService } from './auth.service';

export const PERMISSIONS_MATRIX_CONFIG = new InjectionToken<PermissionMatrix>(
  'permissions-matrix-config'
);

@Injectable({
  providedIn: 'root',
})

export class PermissionsService {
  private authService = inject(AuthService);

  isPostAuthor(postAuthor: User) {
    const loggedUser = this.authService.currentUser;
    return loggedUser && loggedUser.id === postAuthor.id;
  }


}
