import React from 'react';
import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeOrganizations from './HomeOrganizations';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';

export default function Home() {
    return (
        <>
          <HomeNav/>
          <HomeHeader/>
          <HomeThreeColumns/>
          <HomeFourSteps/>
          <HomeAboutUs/>
          <HomeOrganizations/>
          <HomeContact/>
          <HomeFooter/>
        </>
    )
}
