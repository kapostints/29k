import React from 'react';
import DrawerMenu from './DrawerMenu';

import * as Buttons from '../../../common/components/Buttons/Buttons.library';
import * as Cards from '../../../common/components/Cards/Cards.library';
import * as Icons from '../../../common/components/Icons/Icons.library';
import * as Typography from '../../../common/components/Typography/Typography.library';
import * as UiSettings from '../../../common/constants/UiSettings.library';

export type ComponentLibrary = {[key: string]: React.ComponentType};
export type ComponentList = {[key: string]: Array<ComponentLibrary>};

const menuItems: ComponentList = {
  Buttons: [Buttons],
  Cards: [Cards],
  Icons: [Icons],
  Typography: [Typography],
  UiSettings: [UiSettings],
};

const UiLibRootComponent = () => <DrawerMenu items={menuItems} />;

export default UiLibRootComponent;
