import React from 'react';
import MyRecords from './containers/MyRecords';
import MyRecordLineChart from './containers/MyRecordLineChart';
import MyExercise from './containers/MyExercise';
import MyDiary from './containers/MyDiary';

const MyRecord = () => {
  return (
    <div className="max-w-[960px] mx-auto py-[56px]">
      <MyRecords className="mb-[56px]" />
      <MyRecordLineChart />
      <MyExercise className="my-[56px]" />
      <MyDiary />
    </div>
  );
};

export default MyRecord;
