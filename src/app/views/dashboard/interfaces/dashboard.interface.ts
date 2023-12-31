// Generated by https://quicktype.io

export interface Dashboard {
  dashboard: DashboardClass;
}

export interface DashboardClass {
  cantidad_medicos:  CantidadMedicos;
  cantidad_ingresos: CantidadIngresos;
  citas_pendientes:  CitasPendientes;
  citas_atendidas:   CitasAtendidas;
}

export interface CantidadIngresos {
  total_ingresos: number;
  dataset:        number[];
}

export interface CantidadMedicos {
  total_medicos: number;
  dataset:       number[];
}

export interface CitasAtendidas {
  totalCitasAtendidas: number;
  dataset:             number[];
}

export interface CitasPendientes {
  totalCitasPendientes: number;
  dataset:              number[];
}
