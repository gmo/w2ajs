import React from 'react';

import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import { Input } from './Input';

export class Tour extends React.Component {

    tourImage(source) {
        return (<View source={{ paddingRight: 10 }}>
            <Image
                source={source}
                style={{
                    marginTop: 15,
                    width: 315,
                    height: 535
                }}
            />
        </View>);
    }

    render() {
        // Note: Input is a hack to fix a bug with TouchableHighlight in Web View
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex:2, marginTop:20, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={{width: 175, height: 80, marginBottom: 10}}
                    />
                </View>
                <View style={{flex:10, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={{
                            marginTop:10,
                            marginLeft: 10
                        }}
                    >
                        {this.tourImage(require('../../images/1.png'))}
                        {this.tourImage(require('../../images/2.png'))}
                        {this.tourImage(require('../../images/3.png'))}
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 2,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Input
                        placeholder='Hack'
                        setter={() => {}}
                        width={1}
                        height={1}
                    />
                    <TouchableHighlight
                        style={{
                            backgroundColor: '#17bebb',
                            padding: 10,
                            borderRadius: 5,
                            width: '80%'
                        }}
                        onPress={() => this.props.changePage('profile')}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 24,
                                fontWeight: '700'
                            }}
                        >
                            Let's get started!
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
