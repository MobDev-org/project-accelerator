---
to: src/screens/<%= location %>/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.container.tsx
---

import React, {useState, useEffect, useContext}from 'react';
import {View, StyleSheet} from 'react-native';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import LocalizationContext from 'translation/context';
import { useToast } from 'react-native-styled-toast'

import <%= h.capitalize(name) %>Component from './<%= h.capitalize(name) %>.component';
// import actions from 'store/actions';

interface Props {
  navigation?: any;
  route?: {
      params?: {};
  };
}

const <%= h.capitalize(name) %> = (props: Props) => {
  // let x = useAppSelector(state => state.x);
  // let [x, setx] = useState(null);
  // const dispatch = useAppDispatch();
  // const {toast} = useToast();
  let {t} = useContext(LocalizationContext);

  return (
      <<%= h.capitalize(name) %>Component {...props} {...{t}}/>
  );
};

export default <%= h.capitalize(name) %>;
