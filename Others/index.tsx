import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Archived from './Archived';
import BluetoothPairing from './BluetoothPairing';
import AppUpdate from './AppUpdate';
import ImagePicker from './ImagePicker';
import PhotoFilters from './PhotoFilters';
import Restaurants from './Restaurant';
import SeatSelection from './SeatSelection';
import Gallery from './Gallery';
import TrainTracking from './TrainTracking';
import TutorSyllabus from './TutorSyllabus';
// import StoreLocatorTwo from './StoreLocatorTwo';
import Dashboard from './DashBoard';
//@ts-ignore
import StoreLocator from './StoreLocator';
// @ts-ignore
import TrackingZero from './TrackZero';
//@ts-ignore
import TrackingOne from './TrackingOne';
// @ts-ignore
import TrackingThree from './TrackingThree';
// @ts-ignore
import StoreLocatorFour from './StoreLocatorFour';
// @ts-ignore
import TrackingFour from './TrackingFour';

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)
  .add('AppUpdate', () => <AppUpdate />)
  .add('Archived', () => <Archived />)
  .add('ImagePicker', () => <ImagePicker />)
  .add('PhotoFilters', () => <PhotoFilters />)
  .add('BluetoothPairing', () => <BluetoothPairing />)
  .add('Restaurants', () => <Restaurants />)
  .add('SeatSelection', () => <SeatSelection />)
  .add('Gallery', () => <Gallery />)
  .add('TrainTracking', () => <TrainTracking />)
  .add('TutorSyllabus', () => <TutorSyllabus />)
  //.add('Dashboard', () => <Dashboard />)
  .add('StoreLocator', () => <StoreLocator />)
  .add('TrackingOne', () => <TrackingOne />)
  .add('TrackingZero', () => <TrackingZero />)
  .add('TrackingThree', () => <TrackingThree />)
  // .add('StoreLocatorTwo', () => <StoreLocatorTwo />)
  .add('StoreLocatorFour', () => <StoreLocatorFour />)
  .add('TrackingFour', () => <TrackingFour />);
// .add('StoreLocatorTwo', () => <StoreLocatorTwo />);
