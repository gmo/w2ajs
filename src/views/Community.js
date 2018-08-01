import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Channel } from './Channel';
import { Drawer } from './Drawer';

/*
props:
 fullname
 messages []
 hasVisitedSeeker bool
 dropLastSeekerMessage () => {}
 addMessage (from, text) => {}
 addSeekerMessage (from, text) => {}
 */
export class Community extends React.Component {
    welcomeMessage = "Howdy! I'm Bob Landon and I love to help other OM's. I'll be online for the next few minutes. I happen to know a lot about sharing Jesus with Muslims. Happy fishing!";
    zakatMessage = "I'm so glad you asked about that. Zakat is a charitable donation in Islam. Your seeker wants to know if good works will get him to heaven. You can tell him The Bible says salvation is God's free gift to us: “For the wages of sin is death but the free gift of God is eternal life in Christ Jesus our Lord.” — Romans 6:23";

    constructor(props) {
        super(props);

        this.state = {
            welcomed: false,
            zakated: false,
            isDrawerOpen: false,
        };
    }

    setDrawer(isDrawerOpen) {
        this.setState(prevState => { return {...prevState, isDrawerOpen}});
    }

    componentDidMount() {
        // TODO: Add simulated messages from bot, etc
        setTimeout(() => {
            this.props.addMessage('system', 'Feel free to introduce yourself to the W2A community of Online Missionaries! Or, click the Menu in the top left to go get your first Seeker contact!');
        }, 4000);

        setTimeout(() => {
            this.props.addMessage('system', 'If you have any questions, just ask them to the OMs here in this channel!');
        }, 4000 + Math.floor(Math.random()*8000));
    }

    componentDidUpdate() {
        const lastMessageIndex = this.props.messages.length - 1;
        const lastMessage = this.props.messages[lastMessageIndex];
        if (lastMessage.name === this.props.fullname) {
            if (!this.props.hasVisitedSeeker && !this.state.welcomed) {
                this.setState(prevState => { return {...prevState, welcomed: true}});
                setTimeout(() => this.props.addMessage('om', this.welcomeMessage), 4000);
            }
            if (this.props.hasVisitedSeeker && !this.state.zakated) {
                this.setState(prevState => { return {...prevState, zakated: true}});
                setTimeout(() => this.props.addMessage('om', this.zakatMessage), 4000);
            }
        }
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
