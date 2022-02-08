/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useEffect} from 'react';
import {Text,View, SafeAreaView,TouchableOpacity,Image,ScrollView,Animated} from 'react-native';
import styles from '../Styles/styles';
import {icons,images } from '../const';
import {useTheme } from '@react-navigation/native';

const Developer = ({navigation}) => {

    const {colors} = useTheme();
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);








    function renderText(){
        return (
            <View style={styles.Dox}>
                <View style={styles.ga}>
                    <Text  style={{color:colors.text}}>All credit be given to Collins Kingsley who took he's time and accurate knowledge to
                        develop Piwaz.
                    </Text>
                    <Text  style={{color:colors.text}}>
                        Collins kingsley is a Nigerian ,from the Eastern part of the country .

                        </Text>


                </View>
            </View>
        );
    }


   function renderTextArea(){

        return (
            <View>

            <View style={styles.bot}>
              <TouchableOpacity style={styles.order}
                onPress={() => navigation.navigate('Home', {
                    restaurant: restaurant,
                    currentLocation: currentLocation,
                })}
              >

                <Text style={styles.ge}>Homepage</Text>
              </TouchableOpacity>

            </View>
            </View>
        );
      }



    function renderHeader2(){
        return (
            <View style={styles.wz}>
                <TouchableOpacity style={styles.touch22}


                onPress={()=> navigation.goBack()
                }>
                <Image   source={icons.back}
                    resizeMode="contain"
                    style={styles.img}




                />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> navigation.goBack()
                }>

                <View  style={styles.hott}>
                <Text>Back</Text>
                </View>
                </TouchableOpacity>

               <View  style={styles.venza}>


                 <View style={styles.kingss}>


            <Text style={styles.LLI} >Developer</Text>
        </View>


               </View>
               <View style={styles.touch222}  />
            </View>
        );

        }

    function renderImage(){
        return (
            <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}


            >

     <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.kings}
                            resizeMode="cover"
                            style={styles.hhh}
                            />
                          </View>
                            </View>

                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.bb}
                            resizeMode="cover"
                            style={styles.hhh}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.bbb}
                            resizeMode="cover"
                            style={styles.hhh}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.bbbb}
                            resizeMode="cover"
                            style={styles.hhh}
                            />
                           </View>
                            </View>




            </Animated.ScrollView>
        );


    }





function renderHeader(){

return (

<ScrollView style={styles.art}>
    <View style={styles.at}>
        <View style={styles.att}>
            <View >

                <Text    style={{color:colors.text,fontSize:25,
    fontWeight:'bold' }}>Collins Kingsley</Text>

            </View>
            <View style={styles.left}>
            <Image
          source= {images.kings}
           resizeMode="cover"
           style={styles.left}
  />
            </View>
        </View>
        <View>
            < Animated.ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}>
                      <View  style={styles.zx}>
                             <View style={styles.catt}>
                                  <Text style={styles.car}>Background</Text>
                             </View>
                       </View>
                       <View  style={styles.zx}>
                             <View style={styles.catt}>
                                  <Text style={styles.car}>Career</Text>
                             </View>
                       </View>
                       <View  style={styles.zx}>
                             <View style={styles.catt}>
                                  <Text style={styles.car}> Credit</Text>
                             </View>
                       </View>
                       <View  style={styles.zx}>
                             <View style={styles.catt}>
                                  <Text style={styles.car}>Motive</Text>
                             </View>
                       </View>
            </Animated.ScrollView>
        </View>

    </View>
</ScrollView>
);

}


return (
<SafeAreaView >
{renderHeader2()}

{renderHeader()}
{renderImage()}
{renderText()}

{renderTextArea()}


</SafeAreaView>

);


};
export default Developer;
