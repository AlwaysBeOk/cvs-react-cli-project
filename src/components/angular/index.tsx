import React from 'react';


import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class MyAngular extends React.Component<any> {
  
  
  render() {
    return (
      <div>
        MyAngular
      </div>
    );
  }
}

export default MyAngular;
