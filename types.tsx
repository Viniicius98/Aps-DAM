import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps} from "@react-navigation/native-stack"

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList{}
    }
}

export type RootStackParamList = {
    Login: undefined;
    Home: { name: string ,email:string};

}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =  NativeStackScreenProps<RootStackParamList,Screen>;