import React, { useState, useMemo } from 'react';
import HexagonButton from 'components/hexagon/HexagonButton';

import MealItem from 'components/mealItem';
import Typography from 'components/typography';
import Button from 'components/button';
import { DUMMY_MEAL_ITEM, MEAL_TRACKER_DATA } from './constants';
type MealTrackerProps = {
  className?: string;
};
const MealTracker: React.FC<MealTrackerProps> = ({ className }) => {
  const [visibleItems, setVisibleItems] = useState<number>(8);
  const [selectedType, setSelectedType] = useState<string>('');

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, filteredItems.length));
  };

  const filteredItems = useMemo(() => {
    if (!selectedType) return DUMMY_MEAL_ITEM;
    return DUMMY_MEAL_ITEM.filter((item) => item.type === selectedType);
  }, [selectedType]);

  const hasMoreItems = visibleItems < filteredItems.length;

  return (
    <div className={`${className}`}>
      <div className={`flex gap-[64px] items-center justify-center mb-4`}>
        {MEAL_TRACKER_DATA.map((item) => (
          <HexagonButton
            key={item.text}
            text={item.text}
            icon={item.icon}
            className="cursor-pointer"
            onClick={() => {
              setSelectedType((prev) => (prev === item.type ? '' : item.type));
              setVisibleItems(8);
            }}
          />
        ))}
      </div>
      <div>
        <div className="grid grid-cols-4 gap-2 max-w-[960px] mx-auto">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <MealItem key={item.id} {...item} />
          ))}
        </div>
        {hasMoreItems ? (
          <div className="flex justify-center mt-7">
            <Button onClick={handleLoadMore}>
              <Typography variant="lg" className="text-white">
                記録をもっと見る
              </Typography>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MealTracker;
