import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className=" font-pblack text-3xl">Open up App.js to start working on your app!</Text>
      <Text className= "text-xl text-center mx-2">I am very excitted to start this project.To create an application of an Ai</Text>
      <StatusBar style="auto" />
      <Link 
        href= '/home'
        className='bg-blue-500 hover:bg-blue-700 text-white text-lg my-3 py-2 px-4 rounded-full'>
        Go to profile</Link>
    </View>
  );
}

