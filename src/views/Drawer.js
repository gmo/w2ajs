import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

/*
 props:
 setDrawer (bool) => {}
 changePage (page) => {}
 hasVisitedSeeker () => bool
 */
export class Drawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            seekerUpdate: null,
            seekerCount: Math.floor(Math.random()*250) + 250,
        };
    }

    componentDidMount() {
        const seekerUpdate = setInterval(() => {
            let seekerCount = this.state.seekerCount;
            if (Math.random() < 0.45) {
                seekerCount--;
            } else {
                seekerCount++;
            }
            this.setState(prevState => { return {...prevState, seekerCount}});
        }, 5000);

        this.setState(prevState => { return {...prevState, seekerUpdate}});
    }

    componentWillUnmount() {
        clearInterval(this.state.seekerUpdate);
        this.setState(prevState => { return {...prevState, seekerUpdate: null}});
    }

    drawerSectionItem(title, onPress) {
        return (<TouchableOpacity
            key={title}
            onPress={() => {
                onPress();
                this.props.setDrawer(false);
            }}
        >
            <Text
                style={{
                    marginBottom: 15,
                    color: '#fff',
                    fontWeight: '700',
                    letterSpacing: 0.15,
                    fontSize: 20
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>);
    }

    drawerSection(title, items) {
        return (<View style={{marginTop: 20}}>
            <Text
                style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: '900',
                    letterSpacing: 0.35,
                    fontSize: 15,
                    marginBottom: 10
                }}
            >
                {title}
            </Text>
            {(items.map(({title, onPress}) => this.drawerSectionItem(title, onPress)))}
        </View>)
    }

    render() {
        let seekers = [];
        if (this.props.hasVisitedSeeker()) {
            seekers = [{
                title: 'Uhuru Kenyatta',
                onPress: () => this.props.changePage('seeker')
            }];
        }
        return (
            <View style={{flex: 1}}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            zIndex: 2,
                            backgroundColor: '#cd5334',
                            flex: 4,
                            paddingTop: 50,
                            paddingLeft: 20
                        }}
                    >
                        <Image
                            source={require('../../images/logo.png')}
                            style={{width: 80, height: 35}}
                        />
                        <Text
                            style={{
                                marginTop: 8,
                                color: '#fff',
                                letterSpacing: 0.3,
                                fontSize: 17
                            }}
                        >
                            <Text style={{width: 30, fontWeight: '900'}}>
                                {this.state.seekerCount}
                            </Text>
                            <Text style={{fontSize: 13}}>
                                {' SEEKERS WAITING'}
                            </Text>
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.changePage('preview');
                                this.props.setDrawer(false);
                            }}

                            style={{
                                marginTop: 20,
                                backgroundColor: '#17bebb',
                                padding: 15,
                                borderRadius: 5,
                                width: '90%',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{color: '#fff', fontWeight: '900'}}>
                                Add Contact
                            </Text>
                        </TouchableOpacity>

                        <View style={{marginTop: 10}}>
                            {this.drawerSection('SEEKERS', seekers)}
                            {this.drawerSection('DISCIPLES', [])}
                            {this.drawerSection('CHANNELS', [
                                {title: '#community', onPress: () => this.props.changePage('community')},
                                {title: '#tech-support', onPress: () => this.props.changePage('community')},
                            ])}
                        </View>

                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                            <TouchableOpacity
                                style={{justifyContent: 'center', alignItems: 'center', flex: 1 }}
                                onPress={() => this.props.setDrawer(false)}
                            >
                                <Image
                                    source={require('../../images/arrow-right.png')}
                                    style={{height: 20, width: 20}}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
