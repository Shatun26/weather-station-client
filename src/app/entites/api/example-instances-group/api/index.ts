import { axiosInstance } from '../../instances';
import { FetchCharDataResponse } from '../hooks/useFetchChartData/types';

export const getCharDataFetch = async () => (await axiosInstance.get<FetchCharDataResponse>('')).data;

// import { ExampleInstanceParams, FetchExampleInstanceResponse } from '../hooks/useFetchExampleInstance/types';
// export const getCharDataFetch = async (params: ExampleInstanceParams) =>
//     (await axiosInstance.get<FetchExampleInstanceResponse>(`/some-endpoint`, params)).data;
