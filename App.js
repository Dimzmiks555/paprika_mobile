import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';




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
            <Image
              source={require('./assets/navbar/home.png')}
              style={{height: 20, width: 20}}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Корзина" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/navbar/buy.png')}
              style={{height: 20, width: 20}}
            />
          )
        }}/>
      <Tab.Screen 
        name="Заказы" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/navbar/orders.png')}
              style={{height: 20, width: 20}}
            />
          )
        }}/>
      <Tab.Screen 
        name="Профиль" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/navbar/user.png')}
              style={{height: 20, width: 20}}
            />
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