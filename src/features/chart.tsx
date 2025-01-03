import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { FC } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartProps = {
  data: ChartData<'line'>;
};

const LineChart: FC<LineChartProps> = ({ data }) => {
  const options: ChartOptions<'line'> = {
    responsive: false,
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

  return <Line data={data} options={options} width={800} height={300} />;
};

export default LineChart;
