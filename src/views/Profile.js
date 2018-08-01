import React from 'react';

import { Text, View, Image, ScrollView, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native';

import { Input } from './Input';

/*
props:
 changePage () => {}
 setFullName (fullname) => {}
 */
export class Profile extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={{
                    flex: 1,
                    backgroundColor: '#cd5334',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 20
                }}
            >
                <View
                    style={{
                        flex: 1,
                        padding: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('../../images/logo.png')}
                            style={{width: 175, height: 80, marginBottom: 10}}
                        />
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: '700' }}>
                            Tell us about you.
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 10,
                            fontWeight: '400'
                        }}>
                            Let us customize your experience so you can save more seekers!
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Input
                        placeholder='Full Name'
                        setter={this.props.setFullName.bind(this)}
                    />
                    <Input
                        placeholder='Email'
                        setter={() => {}}
                    />
                    <Input
                        placeholder='Phone'
                        setter={() => {}}
                    />
                    <View style={{marginTop: 4, padding: 3}}>
                        <TouchableHighlight
                            style={{
                                backgroundColor: '#17bebb',
                                padding: 10,
                                borderRadius: 5,
                                width: '100%'
                            }}
                            onPress={() => this.props.changePage('loading')}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontSize: 24,
                                    fontWeight: '700'
                                }}
                            >
                                Let's Go!
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
