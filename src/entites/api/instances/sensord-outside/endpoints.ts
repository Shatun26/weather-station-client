import { sensorsOutsideInstance } from './instance';
import {
  AddSensorDataRequest,
  AddSensorDataResponse,
  DeleteSensorDataRequest,
  DeleteSensorDataResponse,
  FetchSensorsDataResponse,
} from './types';

export const getOutsideSensorsDataFetch = async () =>
  (await sensorsOutsideInstance.get<FetchSensorsDataResponse[]>('')).data;

export const addOutsideSensorsDataFetch = async (payload: AddSensorDataRequest) =>
  (await sensorsOutsideInstance.post<AddSensorDataResponse>('', payload)).data;

export const deleteOutsideSensorsDataFetch = async (payload: DeleteSensorDataRequest) =>
  (await sensorsOutsideInstance.delete<DeleteSensorDataResponse>('', { data: payload })).data;
