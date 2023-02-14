import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PermissionAreas } from '../models/permission-areas.model';
import { PermissionsService } from '../services/permissions.service';

type Operation = 'OR' | 'AND';

@Directive({
selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
isElementCreated: boolean = false;
checkedAreas: PermissionAreas[];
operation: Operation = 'OR';
extraCondition: boolean;
constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionsService,
    private authService: AuthService
) {}

@Input() set hasPermission(areas: PermissionAreas[]) {
    this.checkedAreas = areas;
}

@Input() set hasPermissionOperation(operation: Operation) {
    if (operation !== 'OR' && operation !== 'AND')
    throw new Error(
        `Directive can handle only OR and AND operations. ${operation} provided.`
    );
    this.operation = operation;
}

@Input() set hasPermissionExtraCondition(val: boolean) {
    this.extraCondition = val;
}

ngOnInit(): void {
    this.updateView();
    this.updateViewOnUserChange();
}

private updateView() {
    const hasPermission = this.getPermissionBasedOnLogicOperator();
    if (hasPermission) {
    if (!this.isElementCreated) this.createElement();
    } else {
    this.removeElement();
    }
}

private getPermissionBasedOnLogicOperator(): boolean {
    let permissions: boolean[] = this.getPermissionsForEveryArea();
    if (this.extraCondition !== undefined) {
    permissions.push(this.extraCondition);
    }

    let hasPermission: boolean = false;
    if (this.operation === 'AND') {
    hasPermission = permissions.every(Boolean);
    } else if (this.operation === 'OR') {
    hasPermission = permissions.some(Boolean);
    }
    return hasPermission;
}

private getPermissionsForEveryArea(): boolean[] {
    const permissions: boolean[] = this.checkedAreas.map((area) =>
    this.getPermissionForArea(area)
    );
    return permissions;
}

private getPermissionForArea(area: PermissionAreas) {
    // return this.permissionService.isLoggedUserHasPermissionsToArea(area);
    return true;
}

private createElement() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.isElementCreated = true;
}

private removeElement() {
    this.viewContainer.clear();
    this.isElementCreated = false;
}

private updateViewOnUserChange() {
    this.authService.currentUser$.subscribe(() => this.updateView());
}
}
