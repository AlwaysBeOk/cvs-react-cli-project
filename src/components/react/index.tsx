import React, { Component } from 'react';


import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class MyReact extends React.Component<any> {
  
  
  render() {
    return (
      <div>
        MyReact
      </div>
    );
  }
}

export default MyReact;
