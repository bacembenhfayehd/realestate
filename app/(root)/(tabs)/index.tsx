import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text className="font-bold font-rubik text-3xl my-10">Welcome to Restate</Text>
      <Link href='/sign-in'>SignIn</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/properties/[id]'>Properties</Link> 
    </View>
  );
}
