import React from 'react';
import { Text } from 'react-native';

export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

const Task: React.FC<{ name: string }> = ({ name }) => (
  <Text>HEllo {name}</Text>
);

export { Task };
