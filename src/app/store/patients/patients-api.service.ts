import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApi } from 'app/shared/classes/base-api';
import { Observable } from 'rxjs';
import { IPatientModel } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService extends BaseApi {

  constructor(protected http: HttpClient) {
    super(http)
  }

  public fetchPatients(): Observable<IPatientModel> {
    return super.get('51597ef3');
  }
}
