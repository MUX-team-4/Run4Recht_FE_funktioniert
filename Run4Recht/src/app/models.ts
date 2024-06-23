export enum Role {
  ADMIN,
  USER
}

export interface CourtDto {
  id: number;
  name: string;
}

export interface DepartmentDto {
  id: number;
  name: string;
  gericht_id: number;
}

export interface PeriodStatisticDto {
  mitarbeiter_id: number;
  schritte: number;
  strecke: number;
  von_datum: string; // Use string for dates in TypeScript for easier serialization
  bis_datum: string; // Use string for dates in TypeScript for easier serialization
}

export interface RankingDto {
  id: number;
  dienstelle_id: number;
  dienstelle_name: string;
  gesamt: number;
  datum: string; // Use string for dates in TypeScript for easier serialization
}

export interface StatisticDto {
  id: number|null;
  mitarbeiter_id: number;
  schritte: number;
  strecke: number;
  datum: string; // Use string for dates in TypeScript for easier serialization
}

export interface TimePeriodDto {
  von_datum: string; // Use string for dates in TypeScript for easier serialization
  bis_datum: string; // Use string for dates in TypeScript for easier serialization
}

export interface UserDto {
  id: number;
  name: string;
  email: string;
  role: Role;
  dienstelle_id: number;
  stepGoal?: number; // Add optional fields if they exist in your backend model
  height?: number;
  stepLength?: number;
  notificationsEnabled?: boolean;
  nightModeEnabled?: boolean;
  managerViewEnabled?: boolean;
}
