import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'app/shared/models/patient.model';
import { IPatientModel } from 'app/store/patients/models/types';

@Component({
  selector: 'st-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsTableComponent implements OnInit {

  @Input() public patients: IPatientModel;
  @Output() public patientToFavorites: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor() { }

  ngOnInit(): void {
  }

  public addToFavorites(patient: Patient): void {
    this.patientToFavorites.emit(patient);
  }

}
