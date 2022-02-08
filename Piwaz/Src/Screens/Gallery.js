/* eslint-disable prettier/prettier */
import React from 'react';
import {Text,View, SafeAreaView,TouchableOpacity,Image,Animated} from 'react-native';
import styles from '../Styles/styles';
import {icons, images} from '../const';


const Gallery = ({ navigation}) => {


  const [restaurant ] = React.useState(null);
  const [currentLocation ] = React.useState(null);




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




function renderHeader(){
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


             <View style={styles.kings}>


        <Text style={styles.LLI} >Photo Gallerys </Text>
    </View>


           </View>
           <View style={styles.touch222}  />
        </View>
    );

    }



    function renderGalleryList2(){
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
                            source= {images.nice}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.p2}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.p3}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.p4}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.p5}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.p6}
                            resizeMode="center"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.p7}
                            resizeMode="center"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.p8}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.p9}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.p10}
                            resizeMode="center"
                            style={styles.tt}
                            />
                           </View>
                            </View>




            </Animated.ScrollView>
        );


    }


    function renderGalleryList3(){
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
                            source= {images.l1}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.l2}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.l3}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.l4}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.l5}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.l6}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.l7}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.l8}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>
                            <View  style={styles.yy}>
                          <View style={styles.qq}>
                          <Image
                            source= {images.l9}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                          </View>
                            </View>
                            <View  style={styles.yy}>
                           <View style={styles.qq}>
                           <Image
                            source= {images.l10}
                            resizeMode="cover"
                            style={styles.tt}
                            />
                           </View>
                            </View>



            </Animated.ScrollView>
        );



    }









return (
<SafeAreaView style={styles.rex}>
{renderHeader()}

{renderGalleryList2()}
{renderGalleryList3()}
{renderTextArea()}
</SafeAreaView>

);


}; export default Gallery;
