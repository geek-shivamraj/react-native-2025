# Starter Template with React Navigation

## Dynamic Configuration

- React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens.
- `Stack.Navigator` is a component that takes route configuration as its children with additional props for configuration and renders our content.
- Each `Stack.Screen` component takes a `name` prop which refers to the name of the route and `component` prop which specifies the component to render for the route. These are the 2 required props.
- To specify what the initial route in a stack is, provide an `initialRouteName` as the prop for the navigator.
- To specify screen-specific options, we can pass an `options` prop to `Stack.Screen`, and for common options, we can pass `screenOptions` to `Stack.Navigator`.

### Moving b/w Screens
- `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if you're not already on that route.
- We can call `navigation.push('RouteName')` as many times as we like and it will continue pushing routes.
- The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`. On Android, the hardware back button just works as expected.
- You can go back to an existing screen in the stack with `navigation.popTo('RouteName')`, and you can go back to the first screen in the stack with `navigation.popToTop()`.
- The navigation object is available to all screen components with the `useNavigation` hook.

### Passing Parameters to routes

- `navigate` and `push` accept an optional second argument to let you pass parameters to the route you are navigating to. For example: `navigation.navigate('RouteName', { paramName: 'value' })`.
- You can read the params through `route.params` inside a screen
- You can update the screen's params with `navigation.setParams` or `navigation.replaceParams`
- Initial params can be passed via the `initialParams` prop on `Screen` or in the navigator config
- State such as sort order, filters etc. should be kept in params so that the state is reflected in the URL and can be shared/bookmarked.
- Params should contain the least amount of data required to identify a screen; for most cases, this means passing the ID of an object instead of passing a full object.
- Don't keep application specific data or cached data in params; instead, use a global store or cache.
- Some param names are reserved by React Navigation and should be avoided (https://reactnavigation.org/docs/params?config=static#reserved-param-names)

### Configuring the header bar
- You can customize the header inside of the options property of your screens. Read the full list of options in the API reference: https://reactnavigation.org/docs/native-stack-navigator/#options
- The `options` property can be an object or a function. When it is a function, it is provided with an object with the `navigation` and `route` objects.
- You can also specify shared `screenOptions` in the stack navigator configuration when you initialize it. This will apply to all screens in the navigator.


### Header Buttons
- You can set buttons in the header through the `headerLeft` and `headerRight` properties in `options`.
The back button is fully customizable with `headerLeft`, but if you only want to change the title or image, there are other options for that — `headerBackTitle`, `headerBackTitleStyle`, and `headerBackIcon`.
- You can use a callback for the options prop to access `navigation` and `route` objects.
