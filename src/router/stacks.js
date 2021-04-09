/**
 * 堆栈
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Stacks} from '../pages';

//堆栈stack实例
const RootStack = createStackNavigator();

const StackRouteScreen = () => {
  return (
    <RootStack.Navigator>
      {Stacks.map(({name, component, options}) => (
        <RootStack.Screen
          key={name}
          name={name}
          // options={options}
          component={component}
        />
      ))}
    </RootStack.Navigator>
  );
};

export {StackRouteScreen};
