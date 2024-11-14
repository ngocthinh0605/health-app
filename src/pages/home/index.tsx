import HomeBannerGraph from './containers/HomeBannerGraph';
import MealTracker from './containers/MealTracker';
const Home = () => {
  return (
    <>
      <HomeBannerGraph />
      <MealTracker className="my-6" />
    </>
  );
};

export default Home;
