import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";
import PostsScreen from "./src/screens/PostsScreen/PostScreen";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

Navigation.registerComponent(
    "App.PostsScreen",
    () => PostsScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "App.SideDrawerScreen",
    () => SideDrawer,
    store,
    Provider
);

Navigation.startSingleScreenApp({
    screen: {
        screen: "App.PostsScreen",
        title: "Posts",
    },
    drawer: {
        left: {
            screen: 'App.SideDrawerScreen',
        }
    }
});
