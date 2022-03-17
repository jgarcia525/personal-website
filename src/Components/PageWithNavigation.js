import React from 'react';
import NavigationBar from './NavigationBar';

const PageWithNavigation = (props) => {
  return (
    <>
      <NavigationBar />
      {props.page}
    </>
  );
};

export default PageWithNavigation;
