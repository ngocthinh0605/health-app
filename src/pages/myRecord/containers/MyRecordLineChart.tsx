import { useState, useMemo } from 'react';
import LineChart from 'components/charts/lineChart';
import Typography from 'components/typography';
import moment from 'moment';

type Period = '日' | '週' | '月' | '年';

const MyRecordLineChart = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('年');

  const periods: Period[] = ['日', '週', '月', '年'];

  const chartData = useMemo(() => {
    switch (activePeriod) {
      case '日':
        return {
          labels: [
            '6時',
            '7時',
            '8時',
            '9時',
            '10時',
            '11時',
            '12時',
            '13時',
            '14時',
            '15時',
            '16時',
            '17時',
          ],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
              borderColor: '#FFCC21',
              borderWidth: 3,
              pointBackgroundColor: '#FFCC21',
              pointRadius: 4,
              tension: 0.1,
            },
            {
              label: 'Dataset 2',
              data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
              borderColor: '#8FE9D0',
              borderWidth: 3,
              pointBackgroundColor: '#8FE9D0',
              pointRadius: 4,
              tension: 0.1,
            },
          ],
        };

      case '週':
        return {
          labels: ['月', '火', '水', '木', '金', '土', '日'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [90, 80, 60, 55, 45, 45, 35],
              borderColor: '#FFCC21',
              borderWidth: 3,
              pointBackgroundColor: '#FFCC21',
              pointRadius: 4,
              tension: 0.1,
            },
            {
              label: 'Dataset 2',
              data: [85, 70, 55, 50, 40, 35, 25],
              borderColor: '#8FE9D0',
              borderWidth: 3,
              pointBackgroundColor: '#8FE9D0',
              pointRadius: 4,
              tension: 0.1,
            },
          ],
        };

      case '月':
        return {
          labels: ['1日', '5日', '10日', '15日', '20日', '25日', '30日'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [90, 80, 60, 55, 45, 45, 35],
              borderColor: '#FFCC21',
              borderWidth: 3,
              pointBackgroundColor: '#FFCC21',
              pointRadius: 4,
              tension: 0.1,
            },
            {
              label: 'Dataset 2',
              data: [85, 70, 55, 50, 40, 35, 25],
              borderColor: '#8FE9D0',
              borderWidth: 3,
              pointBackgroundColor: '#8FE9D0',
              pointRadius: 4,
              tension: 0.1,
            },
          ],
        };

      case '年':
      default:
        return {
          labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [90, 75, 35, 70, 55, 45, 65, 50],
              borderColor: '#FFCC21',
              borderWidth: 3,
              pointBackgroundColor: '#FFCC21',
              pointRadius: 4,
              tension: 0.1,
            },
            {
              label: 'Dataset 2',
              data: [85, 70, 55, 50, 40, 35, 25, 20],
              borderColor: '#8FE9D0',
              borderWidth: 3,
              pointBackgroundColor: '#8FE9D0',
              pointRadius: 4,
              tension: 0.1,
            },
          ],
        };
    }
  }, [activePeriod]);

  return (
    <div className="bg-dark-500 h-[304px]">
      <div className="px-6 pt-4 flex items-center">
        <Typography
          variant="custom"
          className="w-[96px] !text-[15px] leading-[18px] font-normal tracking-[0.15px] text-left text-white"
        >
          BODY RECORD
        </Typography>
        <Typography
          variant="custom"
          className="!text-[22px] leading-[27px] text-white font-normal"
        >
          {moment('2021.05.21').format('YYYY.MM.DD')}
        </Typography>
      </div>

      <LineChart
        className="!h-[210px]"
        data={chartData}
        options={{
          layout: {
            padding: {
              top: 24,
              left: 48,
              right: 48,
            },
          },
          scales: {
            x: {
              grid: {
                color: '#777777',
                drawOnChartArea: true,
              },
              border: {
                display: false, // ẩn đường kẻ bottom
              },
              ticks: {
                color: '#FFFFFF', // set màu chữ label thành trắng
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
              min: 0, // giá trị tối thiểu
              max: 100, // giá trị tối đa
              suggestedMax: 100, // đề xuất giá trị tối đa
            },
          },
        }}
      />

      <div className="flex gap-4 px-6 mt-1">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`
              w-14 h-6 rounded-full text-sm
              transition-colors
              ${
                activePeriod === period
                  ? 'bg-[#FFCC21] text-white'
                  : 'bg-white text-[#FFCC21]'
              }
            `}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyRecordLineChart;
