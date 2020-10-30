import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

const OrdersStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Orders" component={OrdersScreen} />
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default OrdersStackScreen;