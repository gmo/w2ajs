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
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 5,
                    borderColor: this.state.hasFocus ? '#17bebb' : '#cd5334',
                    borderWidth: 3,
                    width: '100%'
                }}
            >
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
