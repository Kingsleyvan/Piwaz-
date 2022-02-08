/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Animated,
} from 'react-native';
import {icons, images, SIZES, FONTS} from '../const';
import {COLORS} from '../const/Colors';
import styles from '../Styles/styles';

const Restur = ({ route,navigation }) => {
    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(()=>{
 // eslint-disable-next-line no-shadow
 let {item, currentLocation } = route.params;


 setRestaurant(item);
 setCurrentLocation(currentLocation);


});


function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId);

    if (action == '+') {
        if (item.length > 0) {
            let newQty = item[0].qty + 1;
            item[0].qty = newQty;
            item[0].total = item[0].qty * price;
        } else {
            const newItem = {
                menuId: menuId,
                qty: 1,
                price: price,
                total: price,
            };
            orderList.push(newItem);
        }

        setOrderItems(orderList);
    } else {
        if (item.length > 0) {
            if (item[0]?.qty > 0) {
                let newQty = item[0].qty - 1;
                item[0].qty = newQty;
                item[0].total = newQty * price;
            }
        }

        setOrderItems(orderList);
    }
}

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId == menuId);

    if (orderItem.length > 0) {
        return orderItem[0].qty;
    }

    return 0;
}

function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
}

function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
}


function renderHeader(){
return (
    <View style={styles.wz}>
        <TouchableOpacity style={styles.touch22}


onPress={() => navigation.navigate('Home')
        }>
        <Image   source={images.nj}
            resizeMode="contain"
            style={styles.img}




        />
        </TouchableOpacity>

       <View  style={styles.venza}>


         <View style={styles.kingss}>


    <Text style={styles.LLI}>{restaurant?.name}</Text>
</View>


       </View>
     <TouchableOpacity style={styles.touch222}
     
    >

     <Image   source={icons.list}
            resizeMode="contain"
            style={styles.img}

            />

     </TouchableOpacity>
    </View>
);

}
function renderResturList(){
    return (
        <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
        ], { useNativeDriver: false })}


        >

            {restaurant?.menu.map((item,index) =>(

                <View
                key={`menu-${index}`}
                style={styles.yy}
                >
                        <View  style={styles.qq}>
                            <Image
                            source= {item.photo}
                            resizeMode="cover"
                            style={styles.tt}
                            />

                         <View style={styles.uv}>
                             <TouchableOpacity style={styles.nm}
                              onPress={() => editOrder('-', item.menuId, item.price)}
                             >

                                <Text style={styles.dd}>-</Text>
                             </TouchableOpacity>



                          <View style={styles.ff}>

                            <Text style={styles.dd}>{getOrderQty(item.menuId)}</Text>
                          </View>
                         <TouchableOpacity style={styles.kk}
                           onPress={() => editOrder('+', item.menuId, item.price)}
                         >
                         <Text style={styles.dd}>+</Text>
                         </TouchableOpacity>

                         </View >

                        </View>


                        <View style={styles.bbc}>
                        <Text style={styles.c}>{item.name} - {item.price.toFixed(2)}</Text>
                                <Text style={styles.y}>{item.description}</Text>
                        </View>

                   <View  style={styles.xx}>
                   <Image
                                    source={icons.bf}
                                    style={styles.in}
                                />
                     <Text  style={styles.bf}>{item.calories.toFixed(2)}cal</Text>
                   </View>


                </View>

            ))


        }
        </Animated.ScrollView>
    );


}
function renderDot(){

    const dotPosition = Animated.divide(scrollX, SIZES.width);
return (
  <View style={styles.v1}>
      <View style={styles.Dot}>
      {restaurant?.menu.map((item, index) => {

const opacity = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
});

const dotSize = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
    extrapolate: 'clamp',
});

const dotColor = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
    extrapolate: 'clamp',
});
        return (
            <Animated.View
            key={`dot-${index}`}
            opacity={opacity}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
            }}
        />
        );
         } )}
      </View>
      </View>
);
}

function renderOrder(){
    return (
        <View>
            {
                renderDot()
            }
            <View style={styles.od}>
                <View style={styles.odd}>
     <Text style={styles.bam}> {getBasketItemCount()}items in Cart</Text>
     <Text style={styles.bam}>
         ${sumOrder()}
     </Text>
     </View>
      <View style={styles.qw} >
          <View  style={styles.qww}>
             <Image
             source= {icons.pin}
             resizeMode="contain"
             style={styles.pin}


             />
    <Text  style={styles.zzz} >Location</Text>
                       </View>
            <View style={styles.az} >
            <Image
                                source={icons.mastercard}
                                resizeMode="contain"
                                style={styles.ms}
                            />
        <Text style={styles.zzz}>8888</Text>
                  </View>

                </View>
                {/*order*/}


        <View style={styles.bot}>
          <TouchableOpacity style={styles.order}
            onPress={() => navigation.navigate('Order', {
                restaurant: restaurant,
                currentLocation: currentLocation,
            })}
          >

            <Text style={styles.ge}>Order</Text>
          </TouchableOpacity>

        </View>


            </View>
        </View>
    );
}
return (
<SafeAreaView  style={styles.rex}>
    {renderHeader()}
    {renderResturList()}
    {renderOrder()}
</SafeAreaView>

);


}
;
 export default Restur;
