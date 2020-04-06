import React from 'react';
import Homepage from "./components/Homepage";
import DrawerNavigation from "./components/navigation/DrawerNavigation";
import Login from "./components/Login";
import { ScrollView } from 'react-native';
import StackNavigation from "./components/navigation/StackNavigation";


export default function App() {
  return (
      // <StackNavigation/>
      <DrawerNavigation/>
  );
}








