import bannerImage from 'assets/images/d01.jpg';
import CircularProgress from 'components/circularProgress';
import LineChartHome from './LineChartHome';
const HomeBannerGraph = () => {
  return (
    <div className="flex items-center max-h-[316px]">
      <CircularProgress
        className="!w-[540px] !h-[316px]"
        image={bannerImage}
        date="2024-05-21"
        percentage={75}
      />
      <LineChartHome />
    </div>
  );
};

export default HomeBannerGraph;
