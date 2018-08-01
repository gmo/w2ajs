import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from '../libs/SwipeGestures';

export class Preview extends React.Component {

    previewImage(source, width, height, isRounded) {
        if (isRounded === null) {
            isRounded = false;
        }

        return (<View style={{padding: 15}}>
            <Image
                source={source}
                style={{
                    width,
                    height,
                    borderRadius: isRounded ? height / 2 : 0,
                    marginBottom: 10
                }}
            />
        </View>)
    }

    previewTitle(text) {
        return (<Text
            style={{
                marginBottom: 3,
                letterSpacing: 0.25,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: '900',
                fontSize: 15
            }}
        >
            {text.toUpperCase()}
        </Text>)
    }

    previewItem(text) {
        return (<Text
            style={{
                marginBottom: 3,
                color: '#000',
                fontSize: 15
            }}
        >
            {text}
        </Text>)
    }

    onSwipeRight() {
        this.props.setHasVisitedSeeker(true);
        this.props.changePage('seeker');
        return true;
    }

    render() {
        return (
            <GestureRecognizer
                onSwipeRight={this.onSwipeRight.bind(this)}
            >
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <View style={{
                            flex: 2,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text
                                style={{
                                    color: 'rgba(0,0,0,0.8)',
                                    letterSpacing: 4,
                                    fontWeight:'900',
                                    fontSize: 18
                                }}
                            >
                                KENYA
                            </Text>
                            {this.previewImage(require('../../images/kenya.png'), 170, 170, true)}
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 30,
                                    letterSpacing: 1,
                                    fontWeight: '900'
                                }}
                            >
                                Uhuru Kenyatta
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flexDirection: 'row', margin: 15}}>
                            <View style={{flex: 1}}>
                                {this.previewTitle('Website')}
                                {this.previewTitle('Channel')}
                                {this.previewTitle('Language')}
                                {this.previewTitle('Decision')}
                            </View>
                            <View style={{flex: 2}}>
                                {this.previewItem('Facebook.com/GodLifePage')}
                                {this.previewItem('Facebook')}
                                {this.previewItem('English')}
                                {this.previewItem('Prayed to receive Christ')}
                            </View>
                        </View>
                        <View style={{margin: 15}}>
                            {this.previewTitle('Comment')}
                            <Text style={{fontSize: 18, color: '#000'}}>
                                First Seeker Message
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 30,
                                    textAlign: 'center',
                                    color: '#777',
                                    fontSize: 20
                                }}
                            >
                                Accept the conversation?
                            </Text>
                        </View>
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
                        <TouchableOpacity onPress={() => this.props.changePage('community')}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                {this.previewImage(require('../../images/arrow-left.png'), 32, 32)}
                                {this.previewImage(require('../../images/no.png'), 32, 32)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onSwipeRight.bind(this)}>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
                                {this.previewImage(require('../../images/yes.png'), 32, 32)}
                                {this.previewImage(require('../../images/arrow-right.png'), 32, 32)}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </GestureRecognizer>
        );
    }
}
