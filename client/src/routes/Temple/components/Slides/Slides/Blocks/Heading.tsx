import React from 'react';
import styled from 'styled-components/native';
import Gutters from '../../../../../../common/components/Gutters/Gutters';
import {Spacer12} from '../../../../../../common/components/Spacers/Spacer';
import {H2} from '../../../../../../common/components/Typography/Heading/Heading';

const StyledHeading = styled(H2)({
  textAlign: 'center',
});

const Heading: React.FC<{children: React.ReactNode}> = ({children}) => (
  <Gutters>
    <Spacer12 />
    <StyledHeading>{children}</StyledHeading>
    <Spacer12 />
  </Gutters>
);

export default Heading;
