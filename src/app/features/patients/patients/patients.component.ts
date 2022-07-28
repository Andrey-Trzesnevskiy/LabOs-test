import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Patient } from "app/shared/models/patient.model";
import { PatientsFacadeService } from "app/store/patients/patients-facade.service";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(public patientsFacade: PatientsFacadeService) {}

  ngOnInit() {
    
  }

  public getPatients(): void {
    this.patientsFacade.fetchPatients();
  }

  public onPatientToFavorites(patient: Patient): void {
    this.patientsFacade.addToFavoritesPatient(patient);
  }
}
