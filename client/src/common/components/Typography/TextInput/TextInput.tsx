import {TextInput} from 'react-native';
import styled from 'styled-components/native';

import {COLORS} from '../../../constants/colors';
import {SPACINGS} from '../../../constants/spacings';
import textStyles from '../styles';

const Input = styled(TextInput)({
  flexGrow: 1,
  height: 42,
  paddingHorizontal: SPACINGS.SIXTEEN,
  paddingVertical: SPACINGS.TWELVE,
  ...textStyles.B2,
  backgroundColor: COLORS.WHITE,
  borderRadius: 16,
});

export default Input;