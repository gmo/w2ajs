import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Channel } from './Channel';
import { Drawer } from './Drawer';

/*
props:
 messages []
 hasVisitedSeeker () => bool
 dropLastSeekerMessage () => {}
 addMessage (from, text) => {}
 addSeekerMessage (from, text) => {}
 */
export class Community extends React.Component {
    welcomeMessage: "Howdy! I'm Bob Landon and I love to help other OM's. I'll be online for the next few minutes. I happen to know a lot about sharing Jesus with Muslims. Happy fishing!";
    zakatMessage: "I'm so glad you asked about that. Zakat is a charitable donation in Islam. Your seeker wants to know if good works will get him to heaven. You can tell him The Bible says salvation is God's free gift to us: “For the wages of sin is death but the free gift of God is eternal life in Christ Jesus our Lord.” — Romans 6:23";

    constructor(props) {
        super(props);

        this.state = {
            welcomed: false,
            zakated: false,
            isDrawerOpen: false
        };
    }

    setDrawer(isDrawerOpen) {
        this.setState(prevState => { return {...prevState, isDrawerOpen}});
    }

    componentDidMount() {
        // TODO: Add simulated messages from bot, etc
    }


    render() {
        if (this.state.isDrawerOpen) {
            return (
                <Drawer
                    {...this.props}
                    setDrawer={this.setDrawer.bind(this)}
                />
            );
        } else {
            return (
                <Channel
                    {...this.props}
                    title="#community"
                    setDrawer={this.setDrawer.bind(this)}
                />
            );
        }
    }
}
