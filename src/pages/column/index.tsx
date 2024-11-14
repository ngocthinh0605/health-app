import Recomended from './containers/Recomended';
import ColumnListing from './containers/ColumnListing';

const Column = () => {
  return (
    <div className="max-w-[960px] mx-auto py-[56px]">
      <Recomended />
      <ColumnListing />
    </div>
  );
};

export default Column;
