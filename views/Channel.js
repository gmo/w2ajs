import React from 'react';

import { StyleSheet, Text, View, TextInput, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Message } from './Message';
import { MenuBar } from './MenuBar';

/*
 props:
 title string
 messages []
 dropLastSeekerMessage () => {}
 addMessage (from, text) => {}
 addSeekerMessage (from, text) => {}
 changePage (page) => {}
 setDrawer (bool) => {}
 */
export class Channel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: Date.now(),
            messageText: '',
            isFocused: false,
        };
    }

    componentDidMount() {
        const now = Date.now();
        this.setState(prevState => { return {...prevState, start: now }});
    }

    changeMessageText(messageText) {
        this.setState(prevState => { return {...prevState, messageText}});
    }

    setIsFocused(isFocused) {
        this.setState(prevState => { return {...prevState, isFocused}});
    }

    scrollToEnd() {
        this.refs.messageBody.scrollToEnd();
    }

    messageBody() {
        return (<ScrollView
            ref="messageBody"
            onContentSizeChange={this.scrollToEnd.bind(this)}
            contentContainerStyle={{
                paddingTop: 15,
                paddingBottom: 15,
                paddingRight: 25,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexDirection: 'column',
                backgroundColor: '#fff'
            }}
        >
            {this.props.messages.map(({name, time, text, suggested}) => (
                <Message
                    {...this.props}
                    name={name}
                    time={time}
                    text={text}
                    suggested={suggested}
                />
            ))}
        </ScrollView>);
    }

    messagesInput() {
        return (<TextInput
            marginRight={20}
            style={{
                flex: 2,
                zIndex: 1,
                marginRight: 20
            }}
            multiline={true}
            onChangeText={this.changeMessageText.bind(this)}
            onFocus={() => {
                this.setIsFocused(true);
                this.scrollToEnd();
            }}
            onBlur={() => this.setIsFocused(false)}
            value={this.state.messageText}
            placeholder={"Type a Message."}
        />);
    }

    messageControls() {
        const backgroundColor = this.state.messageText === '' ? '#fff' : '#17bebb';
        const textColor = this.state.messageText === '' ? '#17bebb' : '#fff';

        return (<View
            style={{
                flex: 2,
                width: '100%',
                borderTopWidth: 1,
                borderColor: '#17bebb',
                backgroundColor: '#fff',
                flexDirection: 'column',
                paddingTop: 8,
                paddingLeft: 15
            }}
        >
            {this.messagesInput()}
            {this.state.isFocused ?
                (<View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                        marginRight: 5
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: 3
                        }}
                    >
                        <Image
                            source={require('../images/at.png')}
                            style={{paddingLeft: 5, height: 20, width: 20}}
                        />
                        <Image
                            source={require('../images/picture.png')}
                            style={{marginLeft: 5, height: 19, width: 24}}
                        />
                    </View>
                </View>)

                :

                (<TouchableOpacity
                    onPress={() => {
                        this.props.addMessage('user', this.state.messageText);
                        this.changeMessageText('');
                    }}
                    style={{
                        borderWidth: 3,
                        borderColor: '#17bebb',
                        backgroundColor,
                        height: 25,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4
                    }}
                >
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: '700',
                            color: textColor
                        }}
                    >
                        SEND
                    </Text>
                </TouchableOpacity>)
            }
        </View>);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MenuBar
                    {...this.props}
                    start={this.state.start}
                    title={this.props.title}
                />
                <KeyboardAvoidingView
                    style={{flex: 10}}
                    behavior='padding'
                    enabled={true}
                >
                    <View
                        style={{flex: 10}}
                    >
                        {this.messageBody()}
                    </View>
                    {this.messageControls()}
                </KeyboardAvoidingView>
            </View>
        );
    }
}
