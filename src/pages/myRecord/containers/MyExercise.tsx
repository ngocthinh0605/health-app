import React from 'react';
import Typography from 'components/typography';
import moment from 'moment';
import ExerciseItem from 'components/exercise/exerciseItem';
import { EXERCISE_LIST } from './constants';

type MyExerciseProps = {
  className?: string;
};

const MyExercise: React.FC<MyExerciseProps> = ({ className }) => {
  return (
    <div className={`${className} bg-dark-500 px-6 py-4`}>
      <div className="flex items-center mb-1">
        <Typography
          variant="custom"
          className="w-[96px] leading-[18px]  font-normal tracking-[0.15px] text-left text-white"
        >
          MY EXERCISE
        </Typography>
        <Typography
          variant="custom"
          className="!text-[22px] leading-[27px] text-white  font-normal "
        >
          {moment('2021.05.21').format('YYYY.MM.DD')}
        </Typography>
      </div>
      <div className="h-[192px] overflow-y-auto scrollbar-custom pr-4">
        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
          {EXERCISE_LIST.map((item, index) => (
            <ExerciseItem
              key={index}
              {...item}
              className="border-b border-gray-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
