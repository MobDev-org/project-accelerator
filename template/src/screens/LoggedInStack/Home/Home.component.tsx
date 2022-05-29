import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";

import TaskCard from "shared/TaskCard";
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import { Button, useTheme } from "react-native-paper";
import { LocalizationContextProps } from "translation/context";
import InputComp from "shared/Input";
import HeaderComp from "shared/Header";
import LogOut from "assets/LogOut";
import Text from "shared/Text";
import Place from "assets/Place";
import Person from "assets/Person";
import Download from "assets/Download";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserHeader from "shared/UserHeader";
import { useAppSelector } from "store/hooks";
import { useDispatch } from "react-redux";
import {
  getActiveConstructionSites,
  resetActiveSites,
} from "store/activeConstructionSites/slice";
import { ConstructionSite } from "api/tabCoWebAPI.schemas";
import {
  getInactiveConstructionSitesInDNP,
  resetInactiveSitesInDNP,
} from "store/inactiveConstructionSitesInDNP/slice";
import {
  getInactiveConstructionSites,
  resetInactiveSites,
} from "store/inactiveConstructionSites/slice";

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
  t: LocalizationContextProps["t"];
}

function Active() {
  const { colors } = useTheme();
  let { loading, data } = useAppSelector(
    (state) => state.activeConstructionSites
  );
  const dispatch = useDispatch();

  const renderItem = ({ item, index }: { item: ConstructionSite }) => (
    <View
      style={{
        paddingTop: !index ? 48 : 0,
        paddingBottom: index === data.length - 1 ? 16 : 10,
        backgroundColor: "transparent",
      }}
    >
      <TaskCard
        constructionSite={item}
        label="Gradiliste XY"
        bgColor="white"
        // profile
        icon={<Download />}
        iconDescription={
          <Icon name="chevron-down" size={12} color={colors.gray} />
        }
        description="Adresa Street 123"
      />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "transparent",
        paddingBottom: 16,
      }}
      style={{ backgroundColor: "transparent" }}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => {
            dispatch(resetActiveSites());
            dispatch(getActiveConstructionSites());
          }}
        />
      }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

function InactiveSites() {
  const { colors } = useTheme();
  let { loading, data } = useAppSelector(
    (state) => state.inactiveConstructionSites
  );
  const dispatch = useDispatch();

  const renderItem = ({ item, index }: { item: ConstructionSite }) => (
    <View
      style={{
        paddingTop: !index ? 48 : 0,
        paddingBottom: index === data.length - 1 ? 16 : 10,
        backgroundColor: "transparent",
      }}
    >
      <TaskCard
        constructionSite={item}
        label="Gradiliste XY"
        bgColor="white"
        // profile
        icon={<Download />}
        iconDescription={
          <Icon name="chevron-down" size={12} color={colors.gray} />
        }
        description="Adresa Street 123"
      />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "transparent",
        paddingBottom: 16,
      }}
      style={{
        backgroundColor: "transparent",
      }}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => {
            dispatch(resetInactiveSites());
            dispatch(getInactiveConstructionSites());
          }}
        />
      }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

function InactiveSitesInDNP() {
  const { colors } = useTheme();
  let { loading, data } = useAppSelector(
    (state) => state.inactiveConstructionSitesInDNP
  );
  const dispatch = useDispatch();

  const renderItem = ({ item, index }: { item: ConstructionSite }) => (
    <View
      style={{
        paddingTop: !index ? 48 : 0,
        paddingBottom: index === data.length - 1 ? 16 : 10,
        backgroundColor: "transparent",
      }}
    >
      <TaskCard
        constructionSite={item}
        bgColor="white"
        // profile
        icon={<Download />}
        iconDescription={
          <Icon name="chevron-down" size={12} color={colors.gray} />
        }
      />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "transparent",
        // 22 because item has padding of
        paddingBottom: 16,
      }}
      style={{ backgroundColor: "transparent" }}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => {
            dispatch(resetInactiveSitesInDNP());
            dispatch(getInactiveConstructionSitesInDNP());
          }}
        />
      }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
function InactiveTabs() {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(true);
  const [dnp, setDnp] = useState(false);

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button
          mode="outlined"
          color="white"
          uppercase={false}
          style={{
            backgroundColor: finished ? "#100F10CC" : "#100F104D",
          }}
          onPress={() => {
            setFinished(true);
            setDnp(false);
          }}
        >
          Završena gradilišta
        </Button>
        <Button
          mode="outlined"
          color="white"
          uppercase={false}
          style={{
            backgroundColor: dnp ? "#100F10CC" : "#100F104D",
          }}
          onPress={() => {
            setFinished(false);
            setDnp(true);
          }}
        >
          Gradilišta u DNP
        </Button>
      </View>
      {finished ? <InactiveSites /> : <InactiveSitesInDNP />}
    </View>
  );
}

const HomeScreen = (props: Props) => {
  const { t } = props;
  const { colors, roundness } = useTheme();
  const [finished, setFinished] = useState(true);
  const [dnp, setDnp] = useState(false);

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <HeaderComp />
      <UserHeader />
      <BackgroundImage />

      <View
        style={{
          flex: 1,
          marginTop: 16,
        }}
      >
        <Tab.Navigator
          sceneContainerStyle={{
            backgroundColor: "transparent",
          }}
          screenOptions={{
            tabBarActiveTintColor: "#3F4047",
            tabBarIndicatorStyle: { backgroundColor: colors.orange },
          }}
        >
          <Tab.Screen name="Aktivna gradilišta" component={Active} />
          <Tab.Screen name="Neaktivna gradilišta" component={InactiveTabs} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
