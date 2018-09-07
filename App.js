import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import PostsScreen from "./src/screens/PostsScreen/PostScreen";
import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponent(
    "App.PostsScreen",
    () => PostsScreen,
    store,
    Provider
);

Navigation.startSingleScreenApp({
    screen: {
        screen: "App.PostsScreen",
        // title: "Posts",
    }
});
