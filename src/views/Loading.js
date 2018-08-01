import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: 0.0,
        };

        const progressInterval = setInterval(() => {
            this.setState(prevState => { return {loading: this.state.loading + 0.01}});
            if (this.state.loading >= 1.0) {
                this.props.changePage('community');
                clearInterval(progressInterval);
            }
        }, 15);
    }

    render() {
        return (
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                paddingTop: '20%',
                paddingBottom: '15%',
                width: '100%',
                backgroundColor: '#cd5334',
                alignItems: 'center'}}
            >
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={{width: 175, height: 80, marginBottom: 10}}
                    />
                    <Text style={{fontSize: 16, fontWeight: '900', color: 'rgba(255,255,255,0.7)', letterSpacing: 3, textAlign: 'center'}}>
                        WITNESS TO ALL
                    </Text>
                    <Text style={{fontSize:10}}>
                        Loading...
                    </Text>
                </View>
            </View>
        );
    }
}
