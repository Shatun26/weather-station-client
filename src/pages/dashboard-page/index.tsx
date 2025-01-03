import { ChartData } from 'chart.js';
import dayjs from 'dayjs';
import { FC } from 'react';
import s from './styles.module.scss';
import LineChart from '@/features/chart';
import { useSensorsDataQuery } from '@/entites/api/instances/sensord-outside/hooks/useSensorsOutsideQuery';
import { Loader } from '@/shared/ui/loader/loader';

export const DashboardPage: FC = () => {
  const { data } = useSensorsDataQuery();

  if (!data) return <Loader />;

  const labelTimeStamp = data?.map(item => dayjs(item.timestamp).format('DD.MM | HH:mm')) || [];
  const tempArr = data?.map(item => item.temperature) || [];

  const charData: ChartData<'line'> = {
    labels: labelTimeStamp,
    datasets: [
      {
        label: 'Temperature',
        data: tempArr,
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
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className={s.chartWrapper}>
        <LineChart data={charData} />
      </div>
      <div className={s.chartWrapper}>
        <LineChart data={charData} />
      </div>
      <div className={s.chartWrapper}>
        <LineChart data={charData} />
      </div>
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: 'fit-content' }}>
        {sensorsOutsideData &&
          sensorsOutsideData.map(item => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', border: '1px solid black' }}>
              <p> Id: {item.id}</p>
              <p> Timestamp: {dayjs(item.timestamp).format('DD.MM | HH:mm')}</p>
              <p> Humidity: {item.humidity}</p>
              <p> Temperature:{item.temperature}</p>
            </div>
          ))}
      </div> */}
    </div>
  );
};
