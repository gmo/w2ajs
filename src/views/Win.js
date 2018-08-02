import React from 'react';

import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export class Win extends React.Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f8c43a'
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '900',
                        letterSpacing: 3,
                        marginBottom: 30
                    }}
                >
                    YOU EARNED A BADGE
                </Text>
                <Image
                    source={require('../../images/win.png')}
                    style={{height: 150, width: 150, marginBottom: 30}}
                />
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '900',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: 30
                    }}
                >
                    THE DISCIPLEMAKER
                </Text>
            </View>
        );
    }
}
