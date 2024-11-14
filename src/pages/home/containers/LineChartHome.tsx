import LineChart from 'components/charts/lineChart';

const LineChartHome = () => {
  const data = {
    labels: [
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [90, 75, 35, 70, 55, 45, 65, 50, 40, 35, 30, 35],
        borderColor: '#FFCC21',
        borderWidth: 3,
        pointBackgroundColor: '#FFCC21',
        pointRadius: 4,
        tension: 0.1, // làm mượt đường
      },
      {
        label: 'Dataset 2',
        data: [90, 80, 60, 55, 45, 45, 35, 30, 25, 20, 15, 10],
        borderColor: '#8FE9D0',
        borderWidth: 3,
        pointBackgroundColor: '#8FE9D0',
        pointRadius: 4,
        tension: 0.1,
      },
    ],
  };

  return (
    <LineChart
      className="bg-dark-600 !h-[316px]"
      data={data}
      options={{
        layout: {
          padding: {
            top: 20,
            right: 100,
            bottom: 10,
            left: 100,
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
  );
};

export default LineChartHome;
