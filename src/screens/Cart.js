import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image  } from 'react-native';
import {useState, useEffect} from 'react'
import Moment from 'moment';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function CartScreen() {



    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [actualCategory, setActualCategory] = useState(1)

    useEffect(() => {

        Moment.updateLocale('en', {
            longDateFormat : {
                LT : 'HH:mm',
                LTS : 'HH:mm:ss',
                L : 'DD.MM.YYYY',
                LL : 'D MMMM YYYY',
                LLL : 'D MMMM YYYY HH:mm',
                LLLL : 'dddd D MMMM YYYY HH:mm'
            },
        })
        
        fetch(`http://192.168.1.150:8001/category`)
        .then(res => res.json())
        .then(json => {
            setCategories(json)
            // console.log(json)
        })

        fetch(`http://192.168.1.150:8001/menu-product?date=${Moment().format('L')}&category_id=${actualCategory}`)
        .then(res => res.json())
        .then(json => {
            setProducts(json)
            // console.log(Moment().locale('ru').format('L'), Moment.locale())
        })

    }, [actualCategory])



    return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: '#fff'}}>
        <ScrollView overScrollMode ='never'>
            <View style={{ 
                height: 60,
                paddingHorizontal: 20,
                marginTop: 30
                }}>
                <Text style={{
                    fontSize: 32,
                    color: '#333',
                    fontWeight: 'bold'
                }}>Меню на сегодня 😋</Text>
            </View>
            <View >
                <View style={{flexDirection: 'row'}}>
                    {/* <Text style={{
                    paddingHorizontal: 20,
                    fontSize: 24,
                    color: '#333',
                    fontWeight: 'bold'
                }}>Категории</Text> */}
                </View>
                <ScrollView
                    horizontal
                    style={{height: 170}}
                    showsHorizontalScrollIndicator={false}
                    overScrollMode ='never'
                >
                    {
                        categories.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={e => {setActualCategory(item.id)}}
                                style={{
                                    backgroundColor: actualCategory == item.id ? '#f80' : '#fff',
                                    paddingHorizontal: 20,
                                    paddingVertical: 25,
                                    alignItems: 'center',
                                    borderColor: actualCategory == item.id ? '#f80' : '#eee',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    // elevation: actualCategory == item.id ? 30 : 1,
                                    marginHorizontal: 10,
                                    marginTop: 20,
                                    borderRadius: 15,
                                    marginBottom: 10,
                                    shadowColor: actualCategory == item.id ? '#f80' : '#333',
                                    // shadowColor: '#f80',
                                    // shadowRadius: 10,
                                    // shadowOpacity: 0.23,
                                    shadowOffset: { width: 0, height: 10},
                                }}
                            >
                                <Image source={{uri: `http://192.168.1.150:8001/static/${item?.img}` + '?' + new Date()}} style={{width:50, height: 50, marginBottom: 20}}>

                                </Image>
                                <Text style={{
                                    color: actualCategory == item.id ? '#fff' : '#333'
                                }}>{item?.title}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap', marginBottom: 40}}>
                {
                    products.map(item => (
                        <View
                            key={item.id}
                            style={{
                                
                                backgroundColor: '#fff',
                                paddingVertical: 20,
                                paddingHorizontal: 14,
                                width: '42%',
                                alignItems: 'flex-start',
                                borderColor: '#eee',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                marginLeft: 20,
                                marginTop: 20,
                                borderRadius: 15,
                                marginBottom: 5,
                            }}
                        >
                            <View style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                                width: '100%'
                            }}>
                                <Image source={{uri: `http://192.168.1.150:8001/static/${item?.product?.img}` + '?' + new Date()}}  style={{width: '100%', height: 100, resizeMode: 'contain', marginBottom: 20}}></Image>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                paddingBottom: 10
                            }}>
                                {item?.product?.title}
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                width: '100%',
                                marginTop: 'auto'
                            }}>
                                <Text style={{
                                    fontSize: 32,
                                }}>
                                    {item?.product?.price ? item?.product?.price : 0}<Text style={{fontSize: 22}}>₽</Text> 
                                </Text> 
                                <TouchableOpacity>
                                    <Text style={{
                                        width: 41,
                                        height: 40,
                                        fontSize: 24,
                                        textAlign: 'center',
                                        paddingTop: 2,
                                        borderRadius: 50,
                                        color: '#fff',
                                        backgroundColor: '#f80'
                                    }}>
                                        +
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
      </SafeAreaView >
    );
  }