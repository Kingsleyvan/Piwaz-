/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import  { COLORS } from '../const/Colors';
import {FONTS,SIZES} from '../const';
export default StyleSheet.create({
    icon:{flex:1, alignItems:'center',
    },
    view1:{
flexDirection:'row',
position:'absolute',
top:0,
    },
    view2:{flex:1,
        backgroundColor:COLORS.white,
    },
    touch:{
        top:-22.5,
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:COLORS.white,

    },
    touch2:{
        flex:1,
        height:60,
        backgroundColor:COLORS.white,
    },
      bar:{position:'absolute',
      bottom:0,
      left:0,
      right:0,
      height:30,
      backgroundColor:COLORS.white,



      },
      areaView:{
          flex:1,
          backgroundColor:COLORS.lightGray4,
      },
      vv:{
          flexDirection:'row',
          height:50,

      },
      touch22:{
          width:50,
          paddingLeft:SIZES.padding2 * 2 ,
          justifyContent:'center',
      },
      img:{width:30,
           height:50,
           color:COLORS.primary,

    },
    venza:{
        flex:1,
        alignItems: 'center',
        justifyContent : 'center',
    },
    text:{
        ...FONTS.h3,
    },
    ziz:{
        width:'70%',
        height:'100%',
        backgroundColor:COLORS.lightGray3,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:SIZES.radius,


    },
    touch3:{
        width:50,
        paddingRight:SIZES.padding2 * 2,
        justifyContent:'center',
    },
cat:{
    padding: SIZES.padding * 2,

},
cat2:{
    ...FONTS.h1,
},

benz:{
    padding:SIZES.padding,
    paddingBottom:SIZES.padding * 2,

    borderRadius:SIZES.radius,
    alignItems:'center',
    justifyContent:'center',
    marginRight:SIZES.padding,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,

},
roll:{
width:50,
height:50,
borderRadius:25,
alignItems:'center',
justifyContent:'center',
backgroundColor:COLORS.white,

},
 royce:{
     width:40,
     height:40,
 },
 bob:{
     marginTop:SIZES.padding,
     color:COLORS.white,
     ...FONTS.body5,
 },
uche:{
    marginBottom:SIZES.padding * 2,
},
pizza:{
    width:'100%',
    height:200,
    borderRadius:SIZES.radius,

},
tom:{
    position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,

},
je:{
...FONTS.h4,
},
re:{
    ...FONTS.body2,
},
we:{
    marginBottom:SIZES.padding,
},
wee:{
    marginTop:SIZES.padding,
    flexDirection:'row',
},
wi:{
    height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10,
},
ll:{
    ...FONTS.body3,
},
wo:{
    flexDirection:'row',
    marginLeft:10,
},
wz:{
    flexDirection:'row',

},


wzz:{
    ...FONTS.h3, color: COLORS.darkgray,
},

rex:{flex:1,
backgroundColor:COLORS.lightGray4,
},

kings:{
    height:50,
    backgroundColor:COLORS.lightGray3,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    paddingHorizontal:SIZES.padding * 3,

},

LLI:{
    ...FONTS.h3,
    color:COLORS.black,

},
touch222:{
    width:50,
    paddingRight:SIZES.padding2 * 2 ,
    justifyContent:'center',
},
yy:{
alignItems:'center',
},
qq:{
    height: SIZES.height * 0.35,
},
tt:{
    width:SIZES.width,
    height:'100%',
},
uv:{
    position:'absolute',
    bottom: -20,
    width:SIZES.width,
    height:50,
    justifyContent:'center',
    flexDirection:'row',
},
nm:{width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25},

    dd:{
        ...FONTS.body1,
    },
    ff:{
        width:50,


alignItems:'center',
justifyContent:'center',
backgroundColor:COLORS.white,
    },
    kk:{width: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25},

        bbc:{
            width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2,
        },

        c:{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 },

        y:{ ...FONTS.body3 },
        xx:{
            flexDirection: 'row',
            marginTop: 10,
        },
    in:{
        width: 20,
        height: 20,
        marginRight: 10,
    },
    bf:{
        ...FONTS.body3, color: COLORS.darygray,
    },
    Dot:{

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding,

    },
    v1:{ height: 30 },


    od:{
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    odd:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 3,
        borderBottomColor: COLORS.lightGray2,
        borderBottomWidth: 1,
    },
    bam:{ ...FONTS.h3 },

    qw:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 3,
    },
    qww:{ flexDirection: 'row' },
    pin:{
        width: 20,
        height: 20,
        tintColor: COLORS.darkgray,
    },
    zzz:{ marginLeft: SIZES.padding, ...FONTS.h4 },
    az:{ flexDirection:'row' },
    ms:{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray},
bot:{
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
},

order:{
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius,
},
ge:{ color: COLORS.white, ...FONTS.h2 },

king:{
    height:50,
    marginTop:10,
    backgroundColor:COLORS.lightGray3,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    paddingHorizontal:SIZES.padding * 3,
  


},

gal:{
    height:300,
    width:200,
    marginLeft:10,
},
hhh:{
    width:SIZES.width,
    height:'155%',
},
Dox:{

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',


},
ga:{
    height:180,
    width:350,
    marginLeft:10,
    marginTop:20,
},
b:{
    ...FONTS.body3, color: COLORS.black,
},
art:{

},
at:{
    paddingHorizontal:24,
    marginTop:10,
    marginBottom:20,
},
att:{
    paddingTop:12,
    flexDirection: 'row',
    justifyContent:'space-between',
},

sa:{

},
saa:{
    fontSize:25,
    fontWeight:'bold',




},
left:{height:37,
    width:37,
    borderRadius:37 / 2,
    borderColor:'black',





},
zx:{
    paddingTop:10,
    flexDirection:'row',
},
catt:{
    height:28,
    width:89,
    borderWidth:0.7,
    borderColor:'black',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,


},
ad:{
    paddingTop:35,
},
car:{
    height:28,
    width:89,
    borderWidth:0.7,
    borderColor:'black',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    backgroundColor: COLORS.primary,

},
ic:{
    color:COLORS.black,
},
head:{
    backgroundColor:COLORS.white,
    borderBottomWidth:0,

},

jan:{
    color:COLORS.black,
},
BUT:{
    backgroundColor:COLORS.white,
},
hott:{
    height:28,
    width:50,
   
    borderColor:'black',
    
    alignItems:'center',
    justifyContent:'center',
  
    marginTop:15
},
kingss:{
    height:50,
    marginTop:10,
    backgroundColor:COLORS.lightGray3,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    paddingHorizontal:SIZES.padding * 3,
    marginRight:50,


},
lm:{ height:150,
    width:150,
    alignSelf:'center',
    marginTop:50,



},
icc:{
    marginLeft:10,
}
});

