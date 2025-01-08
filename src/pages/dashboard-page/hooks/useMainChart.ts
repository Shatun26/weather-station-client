import { FetchSensorsDataResponse } from '@/entites/api/instances/sensord-outside/types';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import dayjs from 'dayjs';
import { Sensors } from '../constants';
import { findMaxValue, findMinValue } from '@/shared/utils/pure-functions';

type Props = {
  data: FetchSensorsDataResponse[];
  activeSensors: ChartDataset<'line'>[];
};

type PartialChartDataset = Partial<ChartDataset<'line'>>;

const commonOptions: PartialChartDataset = {
  borderColor: 'rgba(75, 192, 192, 1)',
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  tension: 0.4,
  pointRadius: 8,
  pointHoverRadius: 12,
  segment: {
    borderColor: ctx => (ctx.p0.skip || ctx.p1.skip ? 'rgba(75, 192, 192, 0.2)' : undefined),
    borderDash: ctx => (ctx.p0.skip || ctx.p1.skip ? [6, 6] : undefined),
  },
  spanGaps: true,
};

const commonOptionsCardChart: PartialChartDataset = {
  borderColor: 'rgba(75, 192, 192, 1)',
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  tension: 0.4,
  spanGaps: true,
  pointRadius: 0,
  pointHoverRadius: 0,
  fill: true,
};

const mainChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      align: 'start',
      text: 'Temperature',
      font: {
        size: 16,
        weight: 'normal',
      },
      color: 'white',
    },
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'blue',
      borderWidth: 0,
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'rgb(203, 213, 224)',
        font: {
          size: 12,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
      },
    },
    y: {
      ticks: {
        color: 'rgb(203, 213, 224)',
        font: {
          size: 12,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
      },
    },
  },
  interaction: {
    intersect: false,
  },
};

const cardChartOptions: ChartOptions<'line'> = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: true,
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

export const useMainChart = ({ data, activeSensors }: Props) => {
  const tempArr = data.map(item => item.temperature) || [];
  const humArr = data.map(item => item.humidity) || [];
  const labelTimeStamp = data?.map(item => dayjs(item?.timestamp).format('DD.MM | HH:mm')) || [];

  const mainChartDatasets: ChartDataset<'line'>[] = [
    {
      label: Sensors.Temperature,
      data: tempArr,
      ...commonOptions,
    },
    {
      label: Sensors.Humidity,
      data: humArr,
      ...commonOptions,
    },
  ];

  const tempChartData: ChartData<'line'> = {
    labels: labelTimeStamp,
    datasets: [
      {
        data: tempArr,
        ...commonOptionsCardChart,
      },
    ],
  };

  const humChartData: ChartData<'line'> = {
    labels: labelTimeStamp,
    datasets: [
      {
        data: humArr,
        ...commonOptionsCardChart,
      },
    ],
  };

  const charData: ChartData<'line'> = {
    labels: labelTimeStamp,
    datasets: activeSensors,
  };

  const modifiedCardChartOptions: ChartOptions<'line'> = {
    ...cardChartOptions,
    ...{
      ...cardChartOptions.scales,
      ...{
        ...cardChartOptions.scales,
        y: { suggestedMin: (findMinValue(tempArr) || 0) - 1 || 0, suggestedMax: (findMaxValue(tempArr) || 0) + 1 || 0 },
      },
    },
  };

  return {
    charData,
    allDatasets: { mainChartDatasets, tempChartData, humChartData },
    options: { mainChartOptions, cardChartOptions: modifiedCardChartOptions },
  };
};
