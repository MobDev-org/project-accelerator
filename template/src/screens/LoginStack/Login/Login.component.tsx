import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Button from "shared/Button";
import Input from "shared/Input";
import Text from "shared/Text";
import { LocalizationContextProps } from "translation/context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";

interface Props {
  navigation?: any;
  route?: {
    params?: {};
  };
  t: LocalizationContextProps["t"];
  login: Function;
  loading: boolean;
}

const Login = (props: Props) => {
  const { t, login, loading } = props;
  let { width, height } = Dimensions.get("window");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={40}
        enableAutomaticScroll
        contentContainerStyle={styles.container}
      >
        <Text center weight="bold" size={30} style={{ marginTop: 40 }}>
          {t("login.title")}
        </Text>
        <View style={{ width: "100%" }}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={t("form.email")}
                placeholder={t("form.email")}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{ marginTop: 26 }}
                value={value}
                error={errors.email && "E-mail nije validan"}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={t("form.password")}
                placeholder={t("form.password")}
                secure
                onChangeText={onChange}
                onBlur={onBlur}
                style={{ marginTop: 10 }}
                value={value}
                error={errors.password && t("errors.password")}
              />
            )}
            name="password"
          />

          <Button
            loading={loading}
            onPress={handleSubmit(login)}
            label={t("login.btn")}
            icon={<AntDesign name={"arrowright"} color="#fff" size={20} />}
            style={{ marginTop: 32 }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
