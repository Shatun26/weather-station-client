import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { FC } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

type LineChartProps = {
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
};

const LineChart: FC<LineChartProps> = ({ data, options, style, width, height }) => {
  return <Line data={data} options={options} style={style} width={width} height={height} />;
};

export default LineChart;
