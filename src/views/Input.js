import React from 'react';

import { Text, View, Image, ScrollView, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native';

/*
props:
placeholder string
setter (text) => {}
 */
export class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasFocus: false,
            value: ''
        };
    }

    setFocus(hasFocus) {
        this.setState(prevState => { return {...prevState, hasFocus}});
    }

    setValue(value) {
        this.setState(prevState => { return {...prevState, value}});
    }

    render() {
        // Note: Width and Height override is a hack to fix issue with TouchableHighlight on first page of app
        let style={
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 5,
            borderColor: this.state.hasFocus ? '#17bebb' : '#cd5334',
            borderWidth: 3,
            width: this.props.width ? this.props.width : '100%',
        };
        // Note: Width and Height override is a hack to fix issue with TouchableHighlight on first page of app
        if (this.props.height) {
            style.height = this.props.height;
            style.borderColor = '#fff';
        }
        return (
            <View style={style}>
                <TextInput
                    placeholder={this.props.placeholder}
                    onChangeText={(text) => {this.setValue(text); this.props.setter(text);}}
                    value={this.state.value}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                    style={{ width: '100%' }}
                />
            </View>
        )
    }
}
