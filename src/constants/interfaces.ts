import {ViewStyle} from 'react-native';
import {MessageType} from './enums';

export interface GenericButtonInterface {
  title: string;
  onButtonPressed: () => void;
  customStyle?: ViewStyle;
}

export interface UsersInterface {
  id: number;
  name: string;
  location: any;
  chatHistory?: ChatHistoryInterface[];
}

export interface ChatComponentInterface {
  userList: UsersInterface;
  onMessageSend: (userMessage: any) => void;
  //   onMessageReceived: String;
  onBackPressed: () => void;
  onGotoMap: () => void;
}

export interface ChatHistoryInterface {
  type: MessageType;
  message: string;
  timestamp: Date;
}

export interface MapComponentInterface {
  onBackPressed: () => void;
  allUsers: UsersInterface[];
  onSelectUser: (selectedUser: UsersInterface) => void;
  centerLocation: any[];
}
