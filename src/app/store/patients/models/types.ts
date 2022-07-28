import { Patient } from "app/shared/models/patient.model";

export interface IPatientModel {
    count: number;
    moreUncountedMatches: boolean;
    patient: Patient[];
    undisplayedMatches: boolean;
}