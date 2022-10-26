import {useState, useEffect, useMemo, useCallback} from 'react';
import {API_KEY} from '@env';

export const useMain = () => {
  const [data, setData] = useState({});

  const [entities, setEntities] = useState([]);

  const [entity, setEntity] = useState('');

  const [error, setError] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ws = new WebSocket(
    `wss://ws.twelvedata.com/v1/quotes/price?apikey=${API_KEY}`,
  );

  const message = useMemo(() => {
    const newEntities = entities.map(el => {
      return `${el.toUpperCase()}/USD`;
    });

    console.log(newEntities);

    return JSON.stringify({
      action: 'subscribe',
      params: {
        symbols: newEntities.join(','),
      },
    });
  }, [entities]);

  const initiateSocketConnection = useCallback(() => {
    ws.onopen = () => {
      ws.send(message);

      ws.onmessage = e => {
        const payload = JSON.parse(e.data);
        if (payload.event === 'price') {
          console.log(payload);
          setData({
            ...data,
            [payload.symbol]: {
              ...data[payload.symbol],
              price: payload.price,
              ask: payload.ask,
              bid: payload.bid,
              updated: payload.timestamp,
            },
          });
          if (data[payload.symbol].basePrice === undefined) {
            setData({
              ...data,
              [payload.symbol]: {
                ...data[payload.symbol],
                basePrice: payload.price,
              },
            });
          }
        }
      };
    };

    ws.onclose = () => {
      console.log('connection closed');
    };
  }, [data, message, ws]);

  const handleSubmitEntity = useCallback(() => {
    if (entities.includes(entity)) {
      setError(`You already subscribed to ${entity}`);
      setEntity('');
    } else {
      setEntities([...entities, entity]);
      setEntity('');
      setData({...data, [`${entity.toUpperCase()}/USD`]: {}});
    }
  }, [data, entities, entity]);

  const handleChangeEntity = useCallback(str => {
    setError('');
    setEntity(str);
  }, []);

  const handleDeleteEntity = useCallback(
    deletedEntity => {
      console.log(deletedEntity, entities);
      const newEntities = entities.filter(
        item =>
          item.toLowerCase() !== deletedEntity.split('/')[0].toLowerCase(),
      );
      setEntities(newEntities);

      const newData = data;
      delete newData[deletedEntity];
      setData(newData);
    },
    [data, entities],
  );

  useEffect(() => {
    initiateSocketConnection();
  }, [initiateSocketConnection]);

  return {
    entity,
    data,
    handleSubmitEntity,
    handleChangeEntity,
    handleDeleteEntity,
    error,
  };
};
