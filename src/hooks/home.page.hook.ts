/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {ActiveComponents, MessageType} from '../constants/enums';
import {BackHandler} from 'react-native';
import {usersData} from '../data/users.data';
import {randomSentences} from '../data/random.received.messages';
import {UsersInterface} from '../constants/interfaces';

export const useHomePage = () => {
  const [activeComponent, setActiveComponent] = useState(
    ActiveComponents.DashBoard,
  );
  // const [receivedMessage, setReceivedMessage] = useState('');
  const [activeUser, setActiveUser] = useState<UsersInterface>();
  const [usersWithinRange, setUsersWithinRange] = useState<UsersInterface[]>(
    [],
  );

  const givenRagneInKM = 1;
  const centerLocation = [77.61420318230276, 12.910593578748541];

  // Hardware back button presses
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [activeComponent]);

  const backAction = () => {
    if (activeComponent !== ActiveComponents.DashBoard) {
      setActiveComponent(ActiveComponents.DashBoard);
    }
    return true;
  };

  // Filter out users based on given range in km
  useEffect(() => {
    let closeUsers: UsersInterface[] = [];
    usersData.forEach((user: UsersInterface) => {
      const userLocation = user?.location;
      if (
        getDistanceFromLatLonInKm(
          centerLocation[0],
          centerLocation[1],
          userLocation[0],
          userLocation[1],
        ) < givenRagneInKM
      ) {
        closeUsers.push(user);
      }
    });

    setUsersWithinRange(closeUsers);
  }, []);

  //Function to calculate distance between 2 location coords
  function getDistanceFromLatLonInKm(
    lat1: any,
    lon1: any,
    lat2: any,
    lon2: any,
  ) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }

  //Called when user sends a message
  const onMessageSend = (sentMessage: string) => {
    let existingUserData = {...activeUser};
    existingUserData.chatHistory?.push({
      type: MessageType.SENT,
      message: sentMessage,
      timestamp: new Date(),
    });
    setActiveUser({
      ...activeUser,
      chatHistory: existingUserData.chatHistory,
    });

    //Trigering received message after 1 Sec
    setTimeout(() => {
      existingUserData.chatHistory?.push({
        type: MessageType.RECEIVED,
        message: generateRandomReceivedMessage(),
        timestamp: new Date(),
      });

      setActiveUser({
        ...activeUser,
        chatHistory: existingUserData.chatHistory,
      });
    }, 600);
  };

  const generateRandomReceivedMessage = () => {
    const index = Math.floor(Math.random() * (randomSentences.length - 1));
    return randomSentences[index];
  };

  return {
    activeComponent,
    setActiveComponent,
    usersData,
    activeUser,
    setActiveUser,
    onMessageSend,
    // receivedMessage,
    centerLocation,
    usersWithinRange,
  };
};
