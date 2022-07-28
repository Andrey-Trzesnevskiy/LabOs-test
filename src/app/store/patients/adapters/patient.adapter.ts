import { Patient } from "app/shared/models/patient.model";
import { IPatientModel } from "../models/types";

export class PatientAdapter implements IPatientModel {
    count: number;
    moreUncountedMatches: boolean;
    patient: Patient[];
    undisplayedMatches: boolean;
    constructor(data: IPatientModel) {
        this.count = data.count;
        this.moreUncountedMatches = data.moreUncountedMatches;
        this.undisplayedMatches = data.undisplayedMatches;
        this.patient = data.patient.map(patient => {
            return {
                ... patient,
                calculatedAge: this.calculateAge(patient.birthDate.formattedDate)
            }
        })
    }

    private calculateAge(birthDateFormatted: string): string | null {
       if (!birthDateFormatted) {
            return null;
       }
       const date = new Date(birthDateFormatted);
       const currentDay = new Date();
       const currentYear = currentDay.getFullYear();
       const currentMonth = currentDay.getMonth();
       const currentDate = currentDay.getDate();
       const birthYear = date.getFullYear();
       const birthMonth = date.getMonth();
       const birthDate = date.getDate();
       let age = currentYear - birthYear;
       if (currentMonth < birthMonth) {
        age--;
       }
       else if (currentMonth === birthMonth && currentDate < birthDate) {
        age--;
       }
       return age.toString();
    }

}