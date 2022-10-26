import {useMemo} from 'react';

export const useEntityCard = item => {
  const difference = useMemo(() => {
    if (item) {
      return Math.abs(100 - (item.price / item.basePrice) * 100).toFixed(4);
    }
  }, [item]);

  return {difference};
};
