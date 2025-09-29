import { Text, Button} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import seed from "@/lib/seed";

const Search = () => {
    return (
        <SafeAreaView>
            <Text>Search</Text>
            
            <Button title="Seed" onPress={() => seed().catch((err) => console.log("failed to seed the DB", err))} />
        </SafeAreaView>
    )
}
export default Search
