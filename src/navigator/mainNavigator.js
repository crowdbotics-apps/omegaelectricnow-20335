import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile102156Navigator from '../features/UserProfile102156/navigator';
import Tutorial102155Navigator from '../features/Tutorial102155/navigator';
import NotificationList102127Navigator from '../features/NotificationList102127/navigator';
import Settings102126Navigator from '../features/Settings102126/navigator';
import Settings102118Navigator from '../features/Settings102118/navigator';
import UserProfile102116Navigator from '../features/UserProfile102116/navigator';
import BlankScreen1102094Navigator from '../features/BlankScreen1102094/navigator';
import SignUp21102093Navigator from '../features/SignUp21102093/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile102156: { screen: UserProfile102156Navigator },
Tutorial102155: { screen: Tutorial102155Navigator },
NotificationList102127: { screen: NotificationList102127Navigator },
Settings102126: { screen: Settings102126Navigator },
Settings102118: { screen: Settings102118Navigator },
UserProfile102116: { screen: UserProfile102116Navigator },
BlankScreen1102094: { screen: BlankScreen1102094Navigator },
SignUp21102093: { screen: SignUp21102093Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
