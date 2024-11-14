import RecommendedColumn from 'components/column/recommendedColumn';
import { RECOMMENDED_COLUMN_DATA } from './constants';

const Recomended = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {RECOMMENDED_COLUMN_DATA.map((item, index) => (
        <RecommendedColumn
          key={item.id}
          className="mb-[56px]"
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Recomended;
