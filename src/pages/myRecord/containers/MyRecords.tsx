import Record from 'components/record';
import { twMerge } from 'tailwind-merge';
import { RECORDS_DATA } from './constants';

type MyRecordTypeProps = {
  className?: string;
};
const MyRecords: React.FC<MyRecordTypeProps> = ({ className }) => {
  return (
    <div className={twMerge('flex items-center gap-[48px]', className)}>
      {RECORDS_DATA.map((record) => (
        <Record
          key={record.title}
          image={record.image}
          title={record.title}
          subtitle={record.subtitle}
        />
      ))}
    </div>
  );
};

export default MyRecords;
