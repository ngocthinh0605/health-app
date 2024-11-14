import React, { useState } from 'react';
import Column from 'components/column/columnItem';
import Button from 'components/button';
import Typography from 'components/typography';
import { COLUMN_LISTING_DATA } from './constants';
type ColumnListingProps = {
  className?: string;
};
const ColumnListing: React.FC<ColumnListingProps> = ({ className }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, COLUMN_LISTING_DATA.length));
  };

  const displayedItems = COLUMN_LISTING_DATA.slice(0, visibleItems);

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-between gap-2">
        {displayedItems.map((item) => (
          <Column
            key={item.id}
            title={item.title}
            image={item.image}
            date={item.date}
            tags={item.tags}
            className="max-w-[234px]"
            imageHeight={145}
            imageWidth={234}
          />
        ))}
      </div>
      {visibleItems < COLUMN_LISTING_DATA.length ? (
        <div className="flex justify-center mt-7">
          <Button onClick={handleLoadMore}>
            <Typography variant="lg" className="text-white">
              コラムをもっと見る
            </Typography>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ColumnListing;
