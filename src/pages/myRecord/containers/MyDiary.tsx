import { useState } from 'react';
import Diary from 'components/diary';
import Typography from 'components/typography';
import Button from 'components/button';
import { DIARY_LIST } from './constants';

const MyDiary = () => {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, DIARY_LIST.length));
  };

  const showLoadMoreButton = visibleItems < DIARY_LIST.length;

  return (
    <div>
      <Typography
        variant="custom"
        className="text-[22px] leading-[27px] font-normal tracking-[0.15px] text-left"
      >
        MY DIARY
      </Typography>
      <div className="grid grid-cols-4 gap-3 gap-x-3">
        {DIARY_LIST.slice(0, visibleItems).map((diary) => (
          <Diary key={diary.day} {...diary} />
        ))}
      </div>
      {showLoadMoreButton ? (
        <div className="mt-6 flex justify-center">
          <Button onClick={handleLoadMore}>
            <Typography variant="lg" className="text-white">
              自分の日記をもっと見る
            </Typography>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default MyDiary;
