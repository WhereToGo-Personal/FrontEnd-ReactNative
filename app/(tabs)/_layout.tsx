import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {

    return (
        <Tabs screenOptions={{}}>
            <Tabs.Screen 
                name="index"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <FontAwesome name="map-o" size={24} color="black" />,
                    
                }}
            />

            <Tabs.Screen 
                name="event"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <MaterialIcons name="event" size={24} color="black" />
                }}
            />

            <Tabs.Screen 
                name="settings"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="black" />
                }}
            />
        </Tabs>
    );
}