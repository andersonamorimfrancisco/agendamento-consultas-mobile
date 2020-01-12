import { Patient } from "../types";

const normalizePatient = (patient: Patient) => (patient ? patient.name : "");

export default normalizePatient;
