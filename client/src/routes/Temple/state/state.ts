import {DailyParticipant} from '@daily-co/react-native-daily-js';
import {omit, values} from 'ramda';
import {atom, selector, selectorFamily} from 'recoil';
import {
  ExerciseStateData,
  TempleData,
} from '../../../../../shared/src/types/Temple';

const NAMESPACE = 'VideoSharing';

type VideoSharingState = {
  isLoading: boolean;
  isStarted: boolean;
};

export const videoSharingAtom = atom<VideoSharingState>({
  key: `${NAMESPACE}/videoSharing`,
  default: {
    isLoading: false,
    isStarted: false,
  },
});

export const participantsAtom = atom<{
  [user_id: string]: DailyParticipant | undefined;
}>({
  key: `${NAMESPACE}/participants`,
  default: {},
});

export const activeParticipants = atom<Array<string>>({
  key: `${NAMESPACE}/activeParticipants`,
  default: [],
});

export const participantByIdSelector = selectorFamily({
  key: `${NAMESPACE}/participantById`,
  get:
    (participantId: DailyParticipant['user_id'] | undefined) =>
    ({get}) => {
      if (!participantId) {
        return;
      }

      return get(participantsAtom)[participantId];
    },
});

export const participantsSelector = selector<Array<DailyParticipant>>({
  key: `${NAMESPACE}/participantsSelector`,
  get: ({get}) => {
    const participantsObj = get(participantsAtom);
    const lastActiveParticipants = get(activeParticipants);

    // When users leaves the call they are sometimes represented as undefined
    // so we need to remove those
    return [
      ...lastActiveParticipants.map(id => participantsObj[id]),
      ...values(omit(lastActiveParticipants, participantsObj)),
    ].filter(p => p !== undefined) as Array<DailyParticipant>;
  },
});

export const localParticipantSelector = selector<DailyParticipant | null>({
  key: `${NAMESPACE}/localParticipantsSelector`,
  get: ({get}) => {
    const participants = get(participantsAtom);
    return (
      Object.values(participants).find(participant =>
        Boolean(participant?.local),
      ) ?? null
    );
  },
});

export const videoSharingFields = selectorFamily({
  key: `${NAMESPACE}/fields`,
  get:
    (field: keyof VideoSharingState) =>
    ({get}) =>
      get(videoSharingAtom)[field],
  set:
    field =>
    ({set}, newValue) =>
      set(videoSharingAtom, prevState => ({...prevState, [field]: newValue})),
});

export const templeAtom = atom<TempleData | null>({
  key: `${NAMESPACE}/temple`,
  default: null,
});

export const templeExerciseStateSelector = selector<ExerciseStateData | null>({
  key: `${NAMESPACE}/exerciseStateSelector`,
  get: ({get}) => get(templeAtom)?.exerciseState || null,
});
