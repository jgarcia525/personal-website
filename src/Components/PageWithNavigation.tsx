import React from 'react';
import NavigationBar from './NavigationBar.tsx';
import { NavbarVariant } from './NavigationBar';

export interface PageWithNavigationProps {
  page: JSX.Element;
  navbarVariant: NavbarVariant;
}

const PageWithNavigation = (props: PageWithNavigationProps) => {
  return (
    <>
      <NavigationBar navbarVariant={props.navbarVariant} />
      {props.page}
    </>
  );
};

export default PageWithNavigation;
