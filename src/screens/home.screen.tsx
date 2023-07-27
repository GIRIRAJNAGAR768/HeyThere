import React from 'react';
import ChatComponent from '../components/chat.component';
import MapComponent from '../components/map.component';
import {useHomePage} from '../hooks/home.page.hook';
import {ActiveComponents} from '../constants/enums';
import DashboardComponent from '../components/dashboard.component';
import {UsersInterface} from '../constants/interfaces';

const HomeScreen = () => {
  const {
    activeComponent,
    setActiveComponent,
    activeUser,
    setActiveUser,
    onMessageSend,
    // receivedMessage,
    centerLocation,
    usersWithinRange,
  } = useHomePage();

  if (activeComponent === ActiveComponents.DashBoard) {
    return <DashboardComponent onSelectActiveComponent={setActiveComponent} />;
  }
  if (activeComponent === ActiveComponents.ChatComponent) {
    return (
      <ChatComponent
        userList={activeUser}
        onMessageSend={sentMessage => {
          onMessageSend(sentMessage);
        }}
        // onMessageReceived={receivedMessage}
        onBackPressed={() => {
          setActiveComponent(ActiveComponents.DashBoard);
        }}
        onGotoMap={() => {
          setActiveComponent(ActiveComponents.MapComponent);
        }}
      />
    );
  }
  if (activeComponent === ActiveComponents.MapComponent) {
    return (
      <MapComponent
        onBackPressed={() => {
          setActiveComponent(ActiveComponents.DashBoard);
        }}
        allUsers={usersWithinRange}
        onSelectUser={(selectedUser: UsersInterface) => {
          setActiveUser(selectedUser);
          setActiveComponent(ActiveComponents.ChatComponent);
        }}
        centerLocation={centerLocation}
      />
    );
  }
  return null;
};

export default HomeScreen;
