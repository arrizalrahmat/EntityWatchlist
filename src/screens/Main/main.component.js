import React from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import EntityCard from '../EntityCard/entity-card.component';
import {useMain} from './main.hook';
import styles from './main.style';

const Main = () => {
  const {
    entity,
    data,
    handleSubmitEntity,
    handleChangeEntity,
    handleDeleteEntity,
    error,
  } = useMain();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Entity Watchlist</Text>
        <View style={styles.innerContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              value={entity}
              onChangeText={handleChangeEntity}
              style={[styles.textInput, error ? styles.textInputError : {}]}
              placeholder="input new entity to watch"
              onSubmitEditing={handleSubmitEntity}
            />
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        {Object.keys(data).map((key, i) => {
          return (
            <EntityCard
              item={data[key]}
              index={i}
              entity={key}
              onDelete={deletedEntity => handleDeleteEntity(deletedEntity)}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Main;
