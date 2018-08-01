import React from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

/*
 props:
 name string
 time integer
 text string
 suggested bool
 changeMessageText (messageText) => {}
 dropLastSeekerMessage () => {}
 addSeekerMessage (from, text) => {}
 changePage (page) => {}
 */
export class Message extends React.Component {

    constructor(props) {
        super(props);

        const dt = new Date(props.time);

        this.state = {
            dt,
            hours: dt.getHours(),
            mins: dt.getMinutes(),
        };
    }

    render() {
        let backgroundColor = null;
        switch(this.props.name) {
            case 'Uhuru Kenyatta':
                backgroundColor = '#c93d1b';
                break;
            case 'W2A Bot':
                backgroundColor = '#f8c43a';
                break;
            default:
                backgroundColor = '#17bebb';
        }
        let names = this.props.name.toUpperCase().split(/ /);
        let initials = names[0].substr(0, 1);
        if (names.length > 1) {
            initials += ' ' + names[1].substr(0, 1);
        }

        let suggested = null;
        let buttons = null;
        switch (this.props.suggested) {
            case true:
                suggested = (
                    <Text
                        style={{
                            color: '#17bebb',
                            marginLeft: 3,
                            fontWeight: '900',
                            letterSpacing: 0.25,
                            fontSize: 12
                        }}
                    >
                        {'[ RECOMMENDED ]'}
                    </Text>
                );
                buttons = (
                    <View style={{
                        marginLeft: 10,
                        marginRight: 5,
                        marginTop: 10,
                        flexDirection: 'row-reverse'
                    }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: '#17bebb'
                        }}

                        onPress={() => {
                            this.props.dropLastSeekerMessage();
                            this.props.addSeekerMessage('user', this.props.text);
                        }}>
                            <Text style={{fontSize: 14, color: '#17bebb'}}>
                                Send
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 10,
                            marginRight: 30
                        }}

                        onPress={() => {
                          this.props.dropLastSeekerMessage();
                          this.props.changeMessageText(this.props.text);
                        }}>
                            <Text style={{fontSize: 14, color: '#555'}}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
                break;
            case 'completed':
                suggested = (
                    <Text style={{
                        color: '#17bebb',
                        marginLeft: 3,
                        fontWeight: '900',
                        letterSpacing: 0.25,
                        fontSize: 12
                    }}>
                        {'[ NOTES ]'}
                    </Text>
                );
                buttons = (
                    <View style={{
                        marginLeft: 10,
                        marginRight: 5,
                        marginTop: 10,
                        flexDirection: 'row-reverse'
                    }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: '#17bebb'
                        }}
                        onPress={() => this.props.changePage('notes')}
                        >
                            <Text style={{fontSize: 14, color: '#17bebb'}}>
                                Salvation
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 10,
                            marginRight: 15
                        }}
                        onPress={() => this.props.changePage('notes')}
                        >
                            <Text style={{fontSize: 14, color: '#555'}}>
                                Connected to Church
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            padding: 10,
                            marginRight: 15
                        }}
                        onPress={() => this.props.changePage('notes')}
                        >
                            <Text style={{fontSize: 14, color: '#555'}}>
                                Rejected Christ
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
                break;
        }

        return (
            <View style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 20
            }}>
                <View style={{
                    marginLeft: 15,
                    height: 35,
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor,
                    borderRadius: 4
                }}>
                    <Text style={{fontSize: 14, fontWeight: '400', color: '#fff'}}>
                        {initials}
                    </Text>
                </View>
                <View style={{width: '90%'}}>
                    <View style={{marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 12, fontWeight: '700'}}>
                                {this.props.name}
                            </Text>
                            <Text style={{marginLeft: 3, fontSize: 12, color: '#999'}}>
                                {this.state.hours + ':' + this.state.mins > 10 ? this.state.mins : '0' + this.state.mins}
                            </Text>
                        </View>
                        {suggested}
                    </View>
                    <Text selectable={true} style={{
                        color: (this.props.suggested ? '#aaa' : '#000'),
                        marginTop: 5,
                        marginLeft: 10,
                        lineHeight: 18
                    }}>
                        {this.props.text}
                    </Text>
                    {buttons}
                </View>
            </View>
        );
    }
}
