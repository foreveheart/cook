import React, { Component } from "react";
import { View } from './stylecomponent'
class ViewMore extends Component {
  render() {
    return (
      <View {...this.props}>
        查看更多 <i>﹀</i>
      </View>
    );
  }
}

export default ViewMore;
