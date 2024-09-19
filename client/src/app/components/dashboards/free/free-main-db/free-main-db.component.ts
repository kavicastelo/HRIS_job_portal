import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {EmployeeService} from "../../../../services/employee.service";
import {AuthService} from "../../../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'app-free-main-db',
  templateUrl: './free-main-db.component.html',
  styleUrls: ['./free-main-db.component.scss']
})
export class FreeMainDbComponent implements AfterViewInit, OnInit {
  progressValue = 50;
  progressMode: ProgressSpinnerMode = 'determinate';

  personalProgressValue = 8;
  personalProgressMode: ProgressSpinnerMode = 'determinate';

  employee: any;
  employeeId: any;
  company: any;
  companyId: any;
  loading: boolean = false;
  serverError: boolean = false;
  notFound: boolean = false;
  forbidden: boolean = false;
  corsError: boolean = false;
  unexpectedError: boolean = false;

  cname: any = '';
  cemail: any = '';
  cphone: any = '';
  chq: any = '';
  formLocked: boolean = true;

  constructor(private employeeService: EmployeeService,
              private companyService: CompanyService,
              private cookieService: AuthService ) {}

  async ngOnInit(): Promise<any> {
    this.employeeId = this.cookieService.userID();
    this.getEmployee(this.employeeId)
  }

  ngAfterViewInit() {
    const icons = document.querySelectorAll('.material-icons');
    icons.forEach((icon) => {
      icon.setAttribute('translate', 'no');
    });
  }

  getEmployee(id: any) {
    this.loading = true;
    this.employeeService.fetchFullEmployee(id).subscribe(
      (data) => {
        this.employee = data;
        this.calculateProfileProgress(this.employee?.employee, 'employer');
        this.getCompany(this.employee?.employee?.companyId);
      },
      (error: HttpErrorResponse) => {
        // Check for different error types
        if (error.status === 404) {
          this.notFound = true;
        } else if (error.status === 500) {
          this.serverError = true;
        } else if (error.status === 0) {
          this.corsError = true;
        } else if (error.status === 403) {
          this.forbidden = true;
        } else {
          this.unexpectedError = true;
        }

        this.loading = false;
      }
    );
  }

  getCompany(id: any) {
    this.companyService.fetchFullCompany(id).subscribe(
      (data) => {
        this.company = data;
        this.calculateProfileProgress(data?.company, 'company');
        this.cname = this.company?.company?.name;
        this.cemail = this.company?.company?.contactEmail;
        this.cphone = this.company?.company?.contactNumber;
        this.chq = this.company?.company?.location;
        if (this.cname && this.cemail && this.cphone && this.chq) {
          this.formLocked = false;
        }
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        // Check for different error types
        if (error.status === 404) {
          this.notFound = true;
        } else if (error.status === 500) {
          this.serverError = true;
        } else if (error.status === 0) {
          this.corsError = true;
        } else if (error.status === 403) {
          this.forbidden = true;
        } else {
          this.unexpectedError = true;
        }
        this.loading = false;
      }
    )
  }

  calculateProfileProgress(data: any, who: any) {
    this.loading = false;
    if (!data || !data.profileCompleted) {
      this.progressValue = 0;
      this.personalProgressValue = 0;
      return;
    }

    const profileCompletion = data.profileCompleted;
    if (typeof profileCompletion !== 'object' || profileCompletion === null) {
      // Handle case where profileCompletion is not an object or is null
      this.progressValue = 0;
      this.personalProgressValue = 0;
      return;
    }

    const completionArray = Object.values(profileCompletion);
    const total = completionArray.length;
    const completed = completionArray.filter((item: any) => item === true).length;
    if (who === 'employer') {
      this.personalProgressValue = Math.round((completed / total) * 100);
    } else if (who === 'company') {
      this.progressValue = Math.round((completed / total) * 100);
    }
  }
}
