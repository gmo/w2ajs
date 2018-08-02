import React from 'react';

import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import GestureRecognizer, {swipeDirections} from '../libs/SwipeGestures';

export class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            focus: false,
            value: ''
        };
    }

    setValue(value) {
        return this.setState(prevState => { return {...prevState, value}});
    }

    setFocus(focus) {
        return this.setState(prevState => { return {...prevState, focus}});
    }

    previewImage(source, width, height) {
        return (
            <View style={{padding: 15}}>
                <Image
                    source={source}
                    style={{
                        width,
                        height,
                        marginBottom: 10
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <GestureRecognizer onSwipeRight={() => this.props.changePage('win')}>
                <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
                    <View
                        style={{
                            flex: 1,
                            marginTop: 50
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 35,
                                color: '#17bebb'
                            }}
                        >
                            Notes
                        </Text>
                    </View>
                </KeyboardAvoidingView>
                <View
                    style={{
                        flex: 2,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        borderColor: this.state.focus ? '#17bebb' : '#ddd',
                        borderWidth: 3,
                        margin: 20
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            width: '100%'
                        }}
                        placeholder='Let GMO know how your interaction went so we can get smarter about reaching seekers!'
                        onChangeText={(text) => this.setValue(text)}
                        value={this.state.value}
                        multiline={true}
                        numberOfLines={5}
                        onFocus={() => this.setFocus(true)}
                        onBlur={() => this.setFocus(false)}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        marginBottom: 30,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity onPress={() => this.props.changePage('win')}>
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            {this.previewImage(require('../../images/arrow-left.png'), 32, 32)}
                            {this.previewImage(require('../../images/thumbs_down.png'), 32, 32)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.changePage('win')}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            {this.previewImage(require('../../images/thumbs_up.png'), 32, 32)}
                            {this.previewImage(require('../../images/arrow-right.png'), 32, 32)}
                        </View>
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        );
    }
}
