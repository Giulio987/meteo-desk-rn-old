import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CityInfo from './screens/CityInfo';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 25,
            paddingBottom: 0,
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={require('./assets/home.png')}
                      style={{ alignSelf: 'center' }}
                    />
                  </View>
                  {focused && (
                    <View
                      style={{
                        borderBottomWidth: 2,
                        borderBottomColor: '#01175F', //TODO: metterlo in costanti
                        width: 71,
                      }}
                    />
                  )}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarIcon: ({}) => {
              return <Image source={require('./assets/search.png')} />;
            },
          }}
          listeners={{
            tabPress: (e) => {
              // Prevent default action and disable tab press
              e.preventDefault();
            },
          }}
        />
        <Tab.Screen
          name="Location"
          component={Home}
          options={{
            tabBarIcon: ({}) => {
              return <Image source={require('./assets/location.png')} />;
            },
          }}
          listeners={{
            tabPress: (e) => {
              // Prevent default action and disable tab press
              e.preventDefault();
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
