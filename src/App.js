import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Loading, Preview, Community } from './views';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'loading',
      communityMessages: [],
      seekerMessages: []
    };
  }

  selectPage() {
    let output = null;
    switch (this.state.page) {
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
          />
        );
        break;
      case 'community':
        output = (
            <Community
              changePage={this.changePage.bind(this)}
              messages={this.state.communityMessages}
              hasVisitedSeeker={() => false}
              dropLastSeekerMessage={this.dropLastSeekerMessage.bind(this)}
              addMessage={this.addCommunityMessage.bind(this)}
              addSeekerMessage={this.addSeekerMessage.bind(this)}
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
    seekerMessages.pop()
    this.setState(prevState => { return {...prevState, seekerMessages}});
  }

  addCommunityMessage(from, text) {
    this.addMessage(from, text, 'communityMessages');
  }

  addSeekerMessage(from, text) {
    this.addMessage(from, text, 'seekerMessages');
  }

  addMessage(from, text, listName) {
    let list = this.state[listName];

    // TODO

    this.setState(prevState => {
      let newState = {...prevState};
      newState[listName] = list;
      return newState;
    });
  }

  render() {
    return (
      <View style={{flex: 1, height: '100%', width: '100%'}}>
        {this.selectPage()}
      </View>
    );
  }
}
