import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TopStocks from "./screens/TopStocks";
import News from "./screens/News";
import Interactive from "./screens/Interactive";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    GeoramaBold: require('./assets/Fonts/Georama-Bold.ttf'),
    GeoramaReg: require('./assets/Fonts/Georama-Regular.ttf'),
    GeoramaLight: require('./assets/Fonts/Georama-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "#057DCD" } }}
        >
          <Tab.Screen
            name="Top Stocks"
            component={TopStocks}
            options={{
              tabBarLabel: () => {
                return null;
              },
              headerShown: false,
              tabBarIcon: () => (
                <Icon name="equalizer" color="white" size={32} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarLabel: () => {
                return null;
              },
              headerShown: false,
              tabBarIcon: () => <Icon name="article" color="white" size={32} />,
            }}
          />
          <Tab.Screen
            name="Interactive"
            component={Interactive}
            options={{
              tabBarLabel: () => {
                return null;
              },
              headerShown: false,
              tabBarIcon: () => <Icon name="person" color="white" size={32} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
