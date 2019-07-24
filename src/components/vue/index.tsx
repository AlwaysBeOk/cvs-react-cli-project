import React, { Component } from 'react';


import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class MyVue extends React.Component<any> {
  
  
  render() {
    return (
      <div>
        MyVue
      </div>
    );
  }
}

export default MyVue;
