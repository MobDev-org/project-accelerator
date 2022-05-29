import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LocalizationContext from "translation/context";
import { useToast } from "react-native-styled-toast";

import LoginComponent from "./Login.component";
import actions from "store/actions";
import { RootState } from "store/reducers";
import { customAxiosInstance } from "helpers/axiosService";
import { LoginData, loginUser } from "store/user/slice";
import { useAppSelector, useAppDispatch } from "store/hooks";

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
}

const Login = (props: Props) => {
  let { loading } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  let { t } = useContext(LocalizationContext);

  let login = async (data: LoginData) => dispatch(loginUser(data));

  return <LoginComponent {...props} {...{ t, login, loading }} />;
};

export default Login;
