import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {BellIcon, DollarIcon, BasketIcon} from './icons';

const {width: ScreenWidth} = Dimensions.get('window');
const CircleRadius = 38;

const Icons = [DollarIcon, BasketIcon, BellIcon];

export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const position = useRef(new Animated.Value(0)).current;
  const currentIndexAnims = state.routes.map(
    () => useRef(new Animated.Value(0)).current,
  );
  const CurrentIconComponent = Icons[state.index];

  useEffect(() => {
    // Animated.timing(position, {
    //   toValue: ScreenWidth / 3 * state.index + 26,
    //   duration: 200,
    //   useNativeDriver: true,
    // }).start()
    Animated.spring(position, {
      toValue: (ScreenWidth / 3) * state.index + 26,
      velocity: 0.1,
      useNativeDriver: true,
    }).start();

    state.routes.forEach((_route, i) => {
      Animated.timing(currentIndexAnims[i], {
        toValue: i === state.index ? 100 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }, [state.index]);

  return (
    <View style={{flexDirection: 'row'}}>
      <Animated.View
        style={[
          styles.floatingButtonWrapper,
          {transform: [{translateX: position}]},
        ]}>
        <View style={styles.floatingButton}>
          <CurrentIconComponent width={30} height={30} color="#fff" />
        </View>
      </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const IconComponent = Icons[index];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}
            key={route.key}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 56,
              }}>
              <Animated.View
                style={{transform: [{translateY: currentIndexAnims[index]}]}}>
                <IconComponent height={25} width={25} color="#009EF8" />
              </Animated.View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButtonWrapper: {
    borderRadius: 1000,
    backgroundColor: 'rgb(242, 242, 242)',
    position: 'absolute',
    top: -CircleRadius,
    width: CircleRadius * 2,
    height: CircleRadius * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    borderRadius: 1000,
    backgroundColor: '#009EF8',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
