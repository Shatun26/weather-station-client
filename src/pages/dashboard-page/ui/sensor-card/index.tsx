import { FC } from 'react';
import s from './styles.module.scss';
import c from '../../../../shared/styles/common-styles.module.scss';
import { ChartData, ChartOptions } from 'chart.js';
import { clsx } from 'clsx';
import LineChart from '@/features/chart';

type SensorCardProps = {
  title: string;
  postfix: string;
  isActive: boolean;
  onClick: (isActive: boolean) => void;
  chartData: ChartData<'line'>;
  chartOptions: ChartOptions<'line'>;
};

const SensorCard: FC<SensorCardProps> = ({ isActive, onClick, chartData, chartOptions, postfix, title }) => {
  const tempArr = chartData.datasets[0].data as number[];

  return (
    <div className={clsx(c.viewBlock, s.sensor, isActive && s.active)} onClick={() => onClick(!isActive)}>
      <div className={s.stats}>
        <p className={s.title}>{title}</p>
        <p className={s.sensorValue}>
          {tempArr[tempArr.length - 1]} <span>{postfix}</span>
        </p>
      </div>
      <LineChart data={chartData} options={chartOptions} />
    </div>
  );
};

export default SensorCard;
