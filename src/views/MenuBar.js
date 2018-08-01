import React from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

/*
props:
start Date.now()
setDrawer (bool) => {}
title string
 */
export class MenuBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            end: 0
        };
    }

    componentWillMount() {
        const id = setInterval(() => {
            this.setState(prevState => { return {...prevState, end: Date.now() - this.props.start }});
        }, 1000);
        this.setState(prevState => { return {...prevState, id}});
    }

    componentWillUnmount() {
        clearInterval(this.state.id);
        this.setState(prevState => { return {...prevState, id: null}});
    }

    render() {
        return (
            <View style={{flex: 1,
                flexDirection: 'row',
                top: 0,
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor:  "rgba(53, 208, 186, 0.3)",
                height: 75,
                backgroundColor: 'white',
                alignItems: 'flex-end'}}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 5,
                    justifyContent: 'flex-start'
                }}>
                    <TouchableOpacity onPress={() => this.props.setDrawer(true)}>
                        <Image source={require('../../images/menu.png')}
                               style={{
                                   marginBottom: 10,
                                   marginLeft: 10,
                                   width: 25,
                                   height: 25
                               }}
                       />
                    </TouchableOpacity>
                    <Text style={{fontSize: 17, marginBottom: 10, marginLeft: 10}}>
                        {this.props.title}
                    </Text>
                </View>
                <Text style={{fontSize: 13, marginBottom: 13, marginRight: 15}}>
                    {"Wait Time: " + (0 | (this.state.end / 60000)) + " min."}
                </Text>
            </View>
        );
    }
}
