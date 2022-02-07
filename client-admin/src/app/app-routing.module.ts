import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {navigationRoute} from "./shared/layouts/navigation/navigation.route";
import {studentGroupsRoute} from "./entities/student-group/student-group.route";
import {studentsRoute} from "./entities/student/student.route";
import {AuthGuardService} from "./shared/services/auth/auth-guard.service";
import {authorizationRoute} from "./entities/authorization/authorization.route";
import {adminRoute} from "./entities/admin/admin.route";

const LAYOUT_ROUTES = [navigationRoute];

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    data: {breadcrumb: ''},
    children: [
      {path: 'admins', data: {breadcrumb: 'ADMIN'}, children: adminRoute},
      {path: 'students', data: {breadcrumb: 'STUDENTS'}, children: studentsRoute},
      {path: 'student-groups', data: {breadcrumb: 'STUDENT-GROUPS'}, children: studentGroupsRoute},
    ],
  },
  {path: 'authorization', data: {breadcrumb: 'AUTHORIZATION'}, children: authorizationRoute}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...LAYOUT_ROUTES,
        ...appRoutes
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
