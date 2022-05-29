import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LocalizationContext from 'translation/context';
import {useToast} from 'react-native-styled-toast';

import HomeScreenComponent from './Home.component';
import {RootState} from 'store';
import {getActiveConstructionSites} from 'store/activeConstructionSites/slice';
import {getInactiveConstructionSites} from 'store/inactiveConstructionSites/slice';
import {getInactiveConstructionSitesInDNP} from 'store/inactiveConstructionSitesInDNP/slice';

interface Props {
    navigation?: any;
    route?: {
        params?: {};
    };
}

const HomeScreen = (props: Props) => {
    // let x = useSelector((state:RootState) => state.x);
    // let [x, setx] = useState(null);
    const dispatch = useDispatch();
    // const {toast} = useToast();
    let {t} = useContext(LocalizationContext);

    useEffect(() => {
        dispatch(getActiveConstructionSites());
        dispatch(getInactiveConstructionSites());
        dispatch(getInactiveConstructionSitesInDNP());
    }, []);

    return <HomeScreenComponent {...props} {...{t}} />;
};

export default HomeScreen;
