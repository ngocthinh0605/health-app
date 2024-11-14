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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Default options
const defaultOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'category' as const,
      display: true,
      grid: {
        display: true,
        color: '#777777',
      },
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 12,
        autoSkip: true,
        maxRotation: 0,
        padding: 10,
      },
    },
    y: {
      type: 'linear' as const,
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface LineChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const LineChart = ({
  data,
  options = {},
  width = '100%',
  height = '100%',
  className,
}: LineChartProps) => {
  // Merge default options with custom options
  const chartOptions = {
    ...defaultOptions,
    ...options,
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        position: 'relative',
      }}
      className={className}
    >
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default LineChart;
