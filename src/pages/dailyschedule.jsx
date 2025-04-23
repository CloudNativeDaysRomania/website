import { navigate } from 'gatsby';
import { useEffect } from 'react';

const DailyScheduleRedirect = () => {
  useEffect(() => {
    const targetDate = new Date('2025-05-05T17:00:00+03:00'); // Romania time (UTC+3)
    const currentDate = new Date();

    if (currentDate < targetDate) {
      navigate('/workshops');
    } else {
      navigate('/schedule');
    }
  }, []);
};

export default DailyScheduleRedirect;
