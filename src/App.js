import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Loading, Preview, Community, Tour, Profile, Seeker } from './views';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'tour',
      fullname: '',
      hasVisitedSeeker: false,
      askedBob: false,
      communityMessages: [
        { name: 'W2A Bot', time: Date.now(), suggested: false, text: 'Welcome to W2A, Witness to All, a new application for real-time chatting with Seekers around the world. Global Media Outreach is looking forward to your time and effort leading others to know Christ.'}
      ],
      seekerMessages: [
        { name: 'Uhuru Kenyatta', time: Date.now(), suggested: false, text: 'Can God forgive me of anything even if I am not rich?'},
        { name: 'W2A Bot', time: Date.now(), suggested: true, text: 'Hello! The Bible says God will forgive anyone who asks, "If you confess your sins He is faithful and just to forgive us our sins and cleanse us from all unrighteousness. — 1 John 1:9"'}
      ]
    };
  }

  selectPage() {
    let output = null;
    switch (this.state.page) {
      case 'tour':
        output = (
            <Tour
                changePage={this.changePage.bind(this)}
            />
        );
        break;
      case 'profile':
        output = (
            <Profile
              changePage={this.changePage.bind(this)}
              setFullName={this.setFullName.bind(this)}
            />
        );
        break;
      case 'loading':
        output = (
          <Loading
            changePage={this.changePage.bind(this)}
          />
        );
        break;
      case 'preview':
        output = (
          <Preview
            changePage={this.changePage.bind(this)}
            setHasVisitedSeeker={this.setHasVisitedSeeker.bind(this)}
          />
        );
        break;
      case 'community':
        output = (
            <Community
              changePage={this.changePage.bind(this)}
              messages={this.state.communityMessages}
              fullname={this.state.fullname}
              hasVisitedSeeker={this.state.hasVisitedSeeker}
              dropLastSeekerMessage={this.dropLastSeekerMessage.bind(this)}
              addMessage={this.addCommunityMessage.bind(this)}
              addSeekerMessage={this.addSeekerMessage.bind(this)}
            />
        );
        break;
      case 'seeker':
        output = (
            <Seeker
                changePage={this.changePage.bind(this)}
                messages={this.state.seekerMessages}
                dropLastSeekerMessage={this.dropLastSeekerMessage.bind(this)}
                addMessage={this.addSeekerMessage.bind(this)}
                addSeekerMessage={this.addSeekerMessage.bind(this)}
                fullname={this.state.fullname}
                askedBob={this.state.askedBob}
                setAskedBob={this.setAskedBob.bind(this)}
            />
        );
        break;
      default:
        output = (
          <Loading
            changePage={this.changePage.bind(this)}
          />
        );
    }
    return output;
  }

  changePage(page) {
    this.setState({page});
  }

  dropLastSeekerMessage() {
    let seekerMessages = this.state.seekerMessages;
    seekerMessages.pop();
    this.setState(prevState => { return {...prevState, seekerMessages}});
  }

  setFullName(fullname) {
    this.setState(prevState => { return {...prevState, fullname}});
  }

  addCommunityMessage(from, text, suggested) {
    this.addMessage(from, text, suggested, 'communityMessages');
  }

  addSeekerMessage(from, text, suggested) {
    this.addMessage(from, text, suggested, 'seekerMessages');
  }

  addMessage(from, text, suggested, listName) {
    if (suggested === undefined) {
      suggested = false;
    }

    let list = this.state[listName];

    // TODO
    let name = null;
    switch (from) {
      case 'system': name = 'W2A Bot'; break;
      case 'seeker': name = 'Uhuru Kenyatta'; break;
      case 'om': name = 'Robert Landon'; break;
      case 'user':
      default: name = this.state.fullname; break;
    }

    list.push({
      name,
      time: Date.now(),
      text,
      suggested
    });

    this.setState(prevState => {
      let newState = {...prevState};
      newState[listName] = list;
      return newState;
    });
  }

  setHasVisitedSeeker(hasVisitedSeeker) {
    this.setState(prevState => { return {...prevState, hasVisitedSeeker}});
  }

  setAskedBob(askedBob) {
    this.setState(prevState => { return {...prevState, askedBob}});
  }

  render() {
    return (
      <View style={{flex: 1, height: '100%', width: '100%'}}>
        {this.selectPage()}
      </View>
    );
  }
}
