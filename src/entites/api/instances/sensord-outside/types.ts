export type FetchSensorsDataResponse = {
  id: string;
  temperature: number | null;
  humidity: number | null;
  timestamp: string;
};

export type AddSensorDataRequest = {
  temperature: number | null;
  humidity: number | null;
};

export type AddSensorDataResponse = {
  id: string;
};

export type DeleteSensorDataRequest = {
  ids: string[];
};

export type DeleteSensorDataResponse = {
  message: string;
  deletedIds: string[];
};

export type DeleteSensorDataErrorResponse = {
  message: string;
  nonExistentIds: string[];
};
