import "dotenv/config";

export default {
  expo: {
    name: "FrontEnd-ReactNative",
    slug: "frontend-reactnative",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.project.FrontEndReactNative",
      config: {
        googleMapApiKey: process.env.GOOGLE_MAPS_API_KEY_IOS,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.project.FrontEndReactNative",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY_ANDROID,
        },
      },
      permissions: [
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_BACKGROUND_LOCATION",
      ],
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      [
        "@mj-studio/react-native-naver-map",
        {
          client_id: process.env.NAVER_CLIENT_ID,
          android: {
            ACCESS_FINE_LOCATION: true,
            ACCESS_COARSE_LOCATION: true,
            ACCESS_BACKGROUND_LOCATION: true,
          },
        },
      ],
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Allow $(PRODUCT_NAME) to use your location.",
        },
      ],
      [
        "expo-build-properties",
        {
          android: {
            extraMavenRepos: ["https://repository.map.naver.com/archive/maven"],
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
    owner: "10cmmocha",
  },
};
