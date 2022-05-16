import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from './assets/icons/homeIcon';
import CartIcon from './assets/icons/cartIcon';
import OrderIcon from './assets/icons/orderIcon';
import UserIcon from './assets/icons/userIcon';
import CartScreen from './src/screens/Cart';




function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const screenOptionsStyle = {
  headerShown: false
}

const Tab = createBottomTabNavigator();



function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          marginBottom: -10
        }
      }}
      
    >
      <Tab.Screen 
        name="Главная" 
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <HomeIcon style={{height: 20, width: 20, fill: '#333'}}/>
          )
        }}
      />
      <Tab.Screen 
        name="Корзина" 
        component={CartScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <CartIcon style={{height: 26, width: 26, fill: '#333'}}/>
          )
        }}/>
      <Tab.Screen 
        name="Заказы" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <OrderIcon style={{height: 22, width: 22, fill: '#333'}}/>
          )
        }}/>
      <Tab.Screen 
        name="Профиль" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <UserIcon style={{height: 22, width: 22, fill: '#333'}}/>
          )
        }}/>
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();


function HomeStackNavigator() {
  return (
      <Stack.Navigator screenOptions={screenOptionsStyle}>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={screenOptionsStyle} />
        {/* <Stack.Screen name="Detail" component={HomeScreen} /> */}
      </Stack.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>   
      <NavigationContainer>
        <HomeStackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}