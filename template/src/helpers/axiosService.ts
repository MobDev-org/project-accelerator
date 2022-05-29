import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ToastConfig } from "react-native-styled-toast/dist/Toast";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://dev-api.tabco.ba",
}); // use your own URL here or environment variable

export const customAxiosInstance = <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data
  );

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
// export type ErrorType<Error> = AxiosError<Error>;

// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
// export type BodyType<BodyData> = CamelCase<BodyType>;

let succesToast = (toast: (options: ToastConfig) => void, message: string) =>
  toast({
    message,
    intent: "SUCCESS",
  });

let errorToast = (toast: (options: ToastConfig) => void, message: string) =>
  toast({
    message,
    intent: "ERROR",
  });

export const setAxiosInterceptors = (
  toast: (options: ToastConfig) => void,
  t: (translationKey: string) => string
) => {
  AXIOS_INSTANCE.interceptors.response.use(
    (response: any) => {
      // console.log('data:', response);
      if (response?.data?.errors) {
        // console.log('errors data:', response?.data?.errors);
        errorToast(toast, response?.data?.errors);
      }

      if (response?.statusText) succesToast(toast, response?.statusText);

      return response;
    },
    (error: AxiosError) => {
      if (error.message === "Network Error") {
        errorToast(toast, t(`errors.noInternet`));

        return;
      }
      let status = error.response.status;

      // console.log(
      //     'error',
      //     error.message,
      //     error.response.status,
      //     error.response.data.payload.errors,
      // );
      /**
       * Error handling for response
       */
      // if (status == 400) {
      //     return null;
      // }
      if (status == 500) {
        errorToast(toast, t(`errors.serverError`));

        return Promise.reject(error);
      } else if (status === 401) {
        errorToast(toast, t(`errors.unauthorized`));

        return Promise.reject(error);
      }
      //console.tron.log("EEEE",error.response,error.response.data.data.errors, error.response.data.message)

      let message = "";
      if (error?.response?.data?.payload?.errors) {
        // Object.keys(error?.response?.data?.payload?.errors).forEach(
        //     (key, index) => {
        //         message += `${
        //             error.response.data.payload.errors[key][0]
        //         } ${
        //             index === error.response.data.payload.errors - 1
        //                 ? ''
        //                 : `\n`
        //         }`;
        //     },
        // );
        errorToast(
          toast,
          error?.response?.data?.payload?.errors.map(
            (error: any, index: number) =>
              (index === 0 ? "" : `\n`) + error.message
          )
        );
      }

      // console.log('eeeeerror', error.response?.data?.message);
      // if (Object.keys(error?.response?.data?.errors).length > 0)
      //     errorToast(
      //         toast,
      //         error?.response?.data?.errors[
      //             Object.keys(error.response.data.errors)[0]
      //         ],
      //     );
      // else if (
      //     error?.response?.data?.message ||
      //     error?.response?.data?.error
      // )
      //     errorToast(
      //         toast,
      //         error.response.data.error || error.response?.data?.message,
      //     );
      return Promise.reject(error);
    }
  );
};
