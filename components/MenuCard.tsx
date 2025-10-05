import { Text, TouchableOpacity, Image, Platform} from 'react-native';
import {MenuItem} from "@/type";
import {useCartStore} from "@/store/cart.store";
//import {appwriteConfig} from "@/lib/appwrite";

const MenuCard = ({ item: { $id, image_url, name, price }}: { item: MenuItem }) => {
    const {addItem} = useCartStore();
    //const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
    //const imageUrl = `${image_url}`;
    //console.log( "image_url", image_url);
    return (
        <TouchableOpacity className="menu-card" style={Platform.OS === 'android' ? {elevation: 10, shadowColor: '#878787'}: {}}>
            <Image source={{ uri: image_url }} className="size-32 absolute -top-10" resizeMode="contain"/>
            <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>{name}</Text>
            <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>
            <TouchableOpacity onPress={() => addItem({id: $id, image_url, name, price, customizations: []})}>
                <Text className="paragraph-bold text-primary">Add to Cart +</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MenuCard
