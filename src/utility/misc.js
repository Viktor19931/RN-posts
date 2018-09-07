export const navigatorDrawer = (event, $this) => {
    if  (event.type === "NavBarButtonPress" && event.id === "DrawerButton") {
        $this.props.navigator.toggleDrawer({
            side: 'left',
            animated: true
        });
    }
};
