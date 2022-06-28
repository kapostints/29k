import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../../constants/colors';

const styles = StyleSheet.create({
  home: {
    aspectRatio: 1,
  },
});

export const HomeIcon = ({fill = COLORS.GREY100}) => (
  <Svg width="100%" height="100%" viewBox="0 0 30 30" style={styles.home}>
    <Path
      d="M4.558 11.68a.75.75 0 00-.308.606V23c0 .414.336.75.75.75h20a.75.75 0 00.75-.75V12.286a.75.75 0 00-.308-.606l-10-7.286a.75.75 0 00-.884 0l-10 7.286z"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 24v-7h6v7"
      stroke={fill}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
