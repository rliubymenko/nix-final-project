import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Routes} from "@angular/router";
import {StudentGroup} from "../../../shared/models/educationalprocess/student-group.model";
import {StudentGroupService} from "../../../shared/services/educationalprocess/student-group.service";
import {Observable, of} from "rxjs";
import {StudentGroupTableComponent} from "./student-group-table/student-group-table.component";
import {StudentGroupEditComponent} from "./student-group-edit/student-group-edit.component";

@Injectable({providedIn: 'root'})
export class StudentGroupResolve implements Resolve<StudentGroup> {

  constructor(private service: StudentGroupService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<StudentGroup> {
    const uuid = route.params["uuid"];
    if (uuid) {
      return this.service.getByUuid(uuid);
    }
    return of(new StudentGroup());
  }
}

export const studentGroupsRoute: Routes = [
  {
    path: '',
    component: StudentGroupTableComponent,
    data: {
      defaultSort: 'created,asc',
    },
  },
  {
    path: ':uuid/edit-form',
    component: StudentGroupEditComponent,
    data: {
      breadcrumb: 'STUDENT_GROUP',
    },
    resolve: {
      group: StudentGroupResolve,
    }
  },
  {
    path: 'new-student-group',
    component: StudentGroupEditComponent,
    data: {
      breadcrumb: 'STUDENT_GROUP',
    },
    resolve: {
      group: StudentGroupResolve,
    }
  }
];
