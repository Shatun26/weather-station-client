import { ChartDataset } from 'chart.js';
import { FC, useEffect, useState } from 'react';
import s from './styles.module.scss';
import LineChart from '@/features/chart';
import { useSensorsDataQuery } from '@/entites/api/instances/sensord-outside/hooks/useSensorsOutsideQuery';
import c from '../../shared/styles/common-styles.module.scss';
import clsx from 'clsx';
import SensorCard from './ui/sensor-card';
import { useMainChart } from './hooks/useMainChart';
import { Sensors } from './constants';

export const DashboardPage: FC = () => {
  const { data = [] } = useSensorsDataQuery();
  const [activeSensors, setActiveSensors] = useState<ChartDataset<'line'>[]>([]);

  const { charData, allDatasets, options } = useMainChart({ data, activeSensors });

  const toggleActiveSensor = (sensor: string) => {
    setActiveSensors(prev => {
      if (prev.find(item => item.label === sensor)) {
        if (prev.length === 1) return prev;

        return prev.filter(item => item.label !== sensor);
      }

      return [...prev, allDatasets.mainChartDatasets.find(item => item.label === sensor)!];
    });
  };

  useEffect(() => {
    setActiveSensors([allDatasets.mainChartDatasets[0]]);
  }, [data]);

  return (
    <div className={s.wrapper}>
      <div className={s.sensors}>
        <SensorCard
          title={Sensors.Temperature}
          postfix="°C"
          isActive={activeSensors.find(item => item.label === Sensors.Temperature) ? true : false}
          onClick={() => toggleActiveSensor(Sensors.Temperature)}
          chartData={allDatasets.tempChartData}
          chartOptions={options.cardChartOptions}
        />
        <SensorCard
          title={Sensors.Humidity}
          postfix="%"
          isActive={activeSensors.find(item => item.label === Sensors.Humidity) ? true : false}
          onClick={() => toggleActiveSensor(Sensors.Humidity)}
          chartData={allDatasets.humChartData}
          chartOptions={options.cardChartOptions}
        />
      </div>
      <div className={clsx(c.viewBlock, s.controls)}>Controls</div>
      <div className={clsx(c.viewBlock, s.chart)}>
        <LineChart data={charData} options={options.mainChartOptions} />
      </div>
    </div>
  );
};
