import { inject, Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { AuthService } from "../../../permissions/services/auth.service";
import { User } from "../../models/user.model";

@Injectable({ providedIn: 'root' })
export class LoggedUserResolver implements Resolve<User | null> {
  private authService = inject(AuthService);
  resolve(
  ): Observable<User | null> {
    return this.authService.getMe().pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}