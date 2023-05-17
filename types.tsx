import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: {
    name: string;
    email: string;
    weight: string;
    age: string;
    height: string;
  };
  Home: {
    name: string;
    email: string;
    weight: string;
    age: string;
    height: string;
  };
  Register: undefined;
  Initial: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
