import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
import { PermissionMatrix } from '../models/permission-matrix.model';
import { AuthService } from '../../core/data-access/auth.service';

export const PERMISSIONS_MATRIX_CONFIG =
  new InjectionToken<PermissionMatrix>('permissions-matrix-config');

@Injectable({
    providedIn: 'root'
})
export class PermissionsService {
    private appPermissionsMatrix = inject(PERMISSIONS_MATRIX_CONFIG);
    private authService = inject(AuthService);
}