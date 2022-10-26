import React, {useMemo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './entity-card.style';
import {date} from '../../helpers/dateFormatter';
import * as Animatable from 'react-native-animatable';
import {useEntityCard} from './entity-card.hook';

const EntityCard = props => {
  const {item, index, entity, onDelete} = props;

  const {difference} = useEntityCard(item);

  const containerTintPicker = useMemo(() => {
    if (item.price > item.basePrice) {
      return styles.containerPlus;
    } else if (item.basePrice > item.price) {
      return styles.containerMinus;
    } else {
      return {};
    }
  }, [item.basePrice, item.price]);

  const CardComponent = useCallback(() => {
    return (
      <Animatable.View
        key={index}
        style={[styles.container, containerTintPicker]}
        animation={'fadeIn'}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{entity}</Text>
          <Text style={styles.time}>
            {date(item.updated).format('HH.mm.ss')}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          {item.price && item.basePrice ? (
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.price}</Text>
              {difference !== '0.0000' && (
                <Text
                  style={[
                    styles.difference,
                    item.price > item.basePrice
                      ? styles.differencePlus
                      : styles.differenceMinus,
                  ]}>
                  ({item.price > item.basePrice ? '+' : '-'}
                  {difference}%)
                </Text>
              )}
            </View>
          ) : (
            <View />
          )}
          <TouchableOpacity
            style={styles.unsubscribeButton}
            onPress={() => onDelete(entity)}>
            <Text style={styles.unsubscribe}>Unsubscribe</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difference, entity, item.basePrice, item.price]);

  return <CardComponent />;
};

export default EntityCard;
