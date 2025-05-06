import React, { useState } from 'react';
import { Pressable, Text, Animated } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function StyledButton({ title, onPress }: Props) {
  const [buttonScale] = useState(new Animated.Value(1));
  const [buttonColor, setButtonColor] = useState('#229799');

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    setButtonColor('#1d7e7b');
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    setButtonColor('#229799');
  };

  return (
    <Animated.View style={{ transform: [{ scale: buttonScale }], marginBottom: 12 }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={{
          backgroundColor: buttonColor,
          paddingVertical: 14,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 5,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '600' }}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}
