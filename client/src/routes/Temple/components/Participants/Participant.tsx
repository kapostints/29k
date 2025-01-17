import {
  DailyMediaView,
  DailyParticipant,
} from '@daily-co/react-native-daily-js';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {H1} from '../../../../common/components/Typography/Heading/Heading';
import {COLORS} from '../../../../common/constants/colors';
import {SPACINGS} from '../../../../common/constants/spacings';
import NS from '../../../../lib/i18n/constants/namespaces';
import AudioIndicator from './AudioIdicator';
import Name from './Name';

const Wrapper = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.BLACK_EASY,
});

const ParticipantPlaceholder = styled.View({
  backgroundColor: COLORS.CREAM500,
  borderRadius: SPACINGS.SIXTEEN,
  width: 80,
  height: 80,
  justifyContent: 'center',
  alignItems: 'center',
});

const ParticipantAudio = styled(AudioIndicator)({
  height: 24,
  width: 24,
  borderRadius: 45,
  backgroundColor: COLORS.BLACK_TRANSPARENT,
  padding: 2,
  position: 'absolute',
  top: SPACINGS.SIXTEEN,
  right: SPACINGS.SIXTEEN,
});

const ParticipantName = styled(Name)({
  position: 'absolute',
  left: SPACINGS.SIXTEEN,
  bottom: SPACINGS.EIGHT,
});

const DailyMediaViewWrapper = styled(DailyMediaView)({
  height: '100%',
  width: '100%',
});

type ParticipantProps = {
  participant: DailyParticipant;
};

const Participant: React.FC<ParticipantProps> = ({participant}) => {
  const {t} = useTranslation(NS.SCREEN.TEMPLE);
  return (
    <Wrapper>
      {participant.videoTrack ? (
        <DailyMediaViewWrapper
          videoTrack={participant.videoTrack ?? null}
          audioTrack={participant.audioTrack ?? null}
          objectFit="cover"
          mirror={participant.local}
        />
      ) : (
        <ParticipantPlaceholder>
          <H1>{participant?.user_name?.[0]}</H1>
        </ParticipantPlaceholder>
      )}
      <ParticipantName participant={participant} suffix={t('nameSuffix')} />
      <ParticipantAudio muted={!participant.audioTrack} />
    </Wrapper>
  );
};
export default Participant;
