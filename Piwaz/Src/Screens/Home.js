/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {icons, images, SIZES, FONTS} from '../const';
import {COLORS} from '../const/Colors'; 
import styles from '../Styles/styles';

const Home = ({navigation}) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: 'Lagos Island',
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: 'Fries',
      icon: icons.f1,
    },
    {
      id: 2,
      name: 'Burgers',
      icon: icons.f2,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.f3,
    },
    {
      id: 4,
      name: 'Sushi',
      icon: icons.f4,
    },
    {
      id: 5,
      name: 'pizza',
      icon: icons.f5,
    },
    {
      id: 6,
      name: 'Hot Dogs',
      icon: icons.f6,
    },
    {
      id: 7,
      name: '',
      icon: icons.f7,
    },
    {
      id: 8,
      name: 'Burgers',
      icon: icons.f8,
    },
    {
      id: 9,
      name: 'Burgers',
      icon: icons.f10,
    },
    {
      id: 10,
      name: 'Burgers',
      icon: icons.f9,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: ' Canapes',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.pizza,
      duration: '30 - 45 min',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.nice,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.nice2,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: images.nice3,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: ' Sushi',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.sushi,
      duration: '15 - 20 min',
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: images.f3,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: images.sushi2,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: images.sushi2,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'Softworld Sushi',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.sushi2,
      duration: '20 - 25 min',
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: images.pizza,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'Softworld Hot Dog',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.f3,
      duration: '10 - 15 min',
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo: images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'Softworld Fries',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.f4,
      duration: '15 - 20 min',
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: images.f4,
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: images.f3,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: images.pizza,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: images.pizza,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'Softworld pizza',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.pizza,
      duration: '35 - 40 min',
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo: images.pizza,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo: images.pizza,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo: images.sushi2,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

 function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) {
      return category[0].name;
    }

    return '';
  }
  function iSelectedCategory(category) {
    //fillter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function renderHeader() {
    return (
      <View style={styles.vv}>
        <TouchableOpacity style={styles.touch22}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={styles.img}
           
          />
        </TouchableOpacity>
        <View style={styles.venza}>
          <View style={styles.ziz}>
            <Text style={styles.text}>{currentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.touch3}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    );
  }

function getCategoryNameById (id){
  let category = categories.filter(a => a.id == id);

        if (category.length > 0)
            {return category[0].name;}

        return '';

}

  function renderMainPage() {
    const renderItem = ({item}) => {
      return (

        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,

            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => iSelectedCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              style={styles.royce}
              source={item.icon}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color:

                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.cat}>
        <Text style={styles.cat2}>Main</Text>
        <Text style={styles.cat2}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }
function renderResturList(){

    const renderItem = ({item}) =>(
        <TouchableOpacity style={styles.uche}
    onPress = {() => navigation.navigate('Restur',{
      item,
      currentLocation,
    })}>

           <View style={styles.we} >

               <Image
               style={styles.pizza}
               source={item.photo}
               resizeMode="cover"





            />
              <View style={styles.tom}>
             <Text style={styles.je}>{item.duration}</Text>
                </View>
           </View>


           <Text style={styles.re}>{item.name}</Text>

           <View style={styles.wee}>
           <Image
           source ={icons.star}
           style={styles.wi}

           />
<Text style={styles.ll}>{item.rating}</Text>
           <View style={styles.wo}>

                {item.categories.map((categoryId)=>{
                  return (
                    <View style={styles.wz}
               key={categoryId}
                >
                  <Text style={styles.ll}>{getCategoryNameById(categoryId)}</Text>
                  <Text  style={styles.wzz}></Text>


 </View>

                  );
                })

//price//


                }
          { [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray,
                                    }}
                                >$</Text>
                            ))}

          </View>
           </View>
        </TouchableOpacity>

    );
    return (
        <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 2,
        paddingBottom:30,
        }}
        />
    );

}


  return (
    <SafeAreaView style={styles.areaView}>
      {renderHeader()}
      {renderMainPage()}
      {renderResturList()}
    </SafeAreaView>
  );
};
export default Home;
