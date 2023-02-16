import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

import DetailView from './detail'

function SearchView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
      <Button title="afffffffff" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Details" component={DetailView} />
    </HomeStack.Navigator>
  );
}

export default SearchStack;
