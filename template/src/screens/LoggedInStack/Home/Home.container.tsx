import React, {useState, useEffect, useContext}from 'react';
import {View, StyleSheet} from 'react-native';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import LocalizationContext from 'translation/context';
import { useToast } from 'react-native-styled-toast'

import HomeComponent from './Home.component';
// import actions from 'store/actions';

interface Props {
  navigation?: any;
  route?: {
      params?: {};
  };
}

const Home = (props: Props) => {
  // let x = useAppSelector(state => state.x);
  // let [x, setx] = useState(null);
  // const dispatch = useAppDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);

  return (
      <HomeComponent {...props} {...{t}}/>
  );
};

export default Home;
