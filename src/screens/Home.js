import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';



export default function HomeScreen() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
        <View style={{ 
            height: '10%',
            marginTop: 20
             }}>
            <Text style={{
                fontSize: 32,
                color: '#333',
                fontWeight: 'bold'
            }}>Меню на сегодня 😋</Text>
        </View>
        <View >
            <View style={{flexDirection: 'row'}}>
                <Text style={{
                fontSize: 24,
                color: '#333',
                fontWeight: 'bold'
            }}>Категории</Text>
            </View>
            <ScrollView
                horizontal
                style={{height: 170}}
                showsHorizontalScrollIndicator={false}
            >
                {
                    [1,2,3,4,5,6].map(item => (
                        <TouchableOpacity
                            style={{
                                padding: 25,
                                alignItems: 'center',
                                borderColor: '#fea',
                                borderStyle: 'solid',
                                borderWidth: 2,
                                elevation: 2,
                                marginLeft: 20,
                                marginTop: 20,
                                borderRadius: 15,
                                marginBottom: 10,
                            }}
                        >
                            <Image source={require('../../assets/categories/soup.png')} style={{width:50, height: 50, marginBottom: 20}}>

                            </Image>
                            <Text>Первое</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
        <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap'}}>
            {
                [1,2,3,4,5,6].map(item => (
                    <TouchableOpacity
                        style={{
                            padding: 25,
                            width: '40%',
                            alignItems: 'center',
                            borderColor: '#fea',
                            borderStyle: 'solid',
                            borderWidth: 2,
                            elevation: 2,
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 15,
                            marginBottom: 10,
                        }}
                    >
                        <Image source={require('../../assets/categories/soup.png')} style={{width:50, height: 50, marginBottom: 20}}>

                        </Image>
                        <Text>Первое</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
      </View>
    );
  }