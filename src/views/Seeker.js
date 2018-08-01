import React from 'react';

import { Text, View, Image } from 'react-native';

import { Channel } from './Channel';
import { Drawer } from './Drawer';

export class Seeker extends React.Component {
    confusingMessage = 'But what about the zakat we give in Islam? Who does that go to and how does Allah hear my prayers if Allah does not receive my zakat?';
    acceptingMessage = 'This is so good news! I believe in Jesus! I pray He will forgive me of my sins by the sacrifical blood of Jesus and I commit to Him forever. He is the Son of God and I feel such joy and freedom to know I have life.';

    constructor(props) {
        super(props);

        this.state = {
            confused: false,
            gospeled: false,
            isDrawerOpen: false,
            askedBob: false
        };
    }

    componentDidUpdate() {
        const lastMessageIndex = this.props.messages.length - 1;
        const lastMessage = this.props.messages[lastMessageIndex];
        if (lastMessage.name === this.props.fullname) {
            if (!this.state.askedBob && !this.state.confused) {
                this.setState(prevState => { return {...prevState, confused: true}});
                setTimeout(() => this.props.addMessage('seeker', this.confusingMessage), 10000);
            }
            if (this.props.askedBob && !this.state.gospeled) {
                this.setState(prevState => { return {...prevState, gospeled: true}});
                setTimeout(() => {
                    this.props.addMessage('seeker', this.acceptingMessage);
                    setTimeout(() => this.props.addMessage('seeker', 'Let\'s talk tomorrow more about Jesus.'), 3000);
                    setTimeout(() => this.props.addMessage('system', 'Uhuru Kenyatta has left.', 'completed'), 6000);
                }, 4000);
            }
        }
    }

    setDrawer(isDrawerOpen) {
        this.setState(prevState => { return {...prevState, isDrawerOpen, askedBob: true}});
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
                    title="Uhuru Kenyatta"
                    setDrawer={this.setDrawer.bind(this)}
                />
            );
        }
    }

}
