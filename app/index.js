import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import DiningScreen from '../Dining/DiningIndex';

// https://api.mycobaltsoftware.com/Staging/App.Wrapper.CSSI/api/Member/GetIcons

const DashboardScreen = ({ navigation }) => {
  const imagesArray = [
    {
      DisplayName: 'Today at a Glance',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Today-At-Glance-Thumbnail@2x.JPG',
      id: 0,
    },
    {
      DisplayName: 'Calendar of Events',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Calendar-Of-Events-Thumbnail@3x.JPG',
      id: 1,
    },
    {
      DisplayName: 'Dining',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Dining-Reservations-Thumbnail@3x.JPG',
      id: 2,
    },
    {
      DisplayName: 'Golf',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Tee-Times-Thumbnail@3x.JPG',
      id: 3,
    },
    {
      DisplayName: 'Racquet Sports',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Court-Times-Thumbnail@3x.JPG',
      id: 4,
    },
    {
      DisplayName: 'Fitness & Spa',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/FitrnessSpa@3x.PNG',
      id: 5,
    },
    {
      DisplayName: 'Gift Card',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Gift-Card-Thumbnail@3x.JPG',
      id: 6,
    },
    {
      DisplayName: 'Guest Card',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Guest-Card-Thumbnail@3x.JPG',
      id: 7,
    },
    {
      DisplayName: 'Statements',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Statements-Thumbnail@3x.JPG',
      id: 8,
    },
    {
      DisplayName: 'Important Club Numbers',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Important-Numbers@3x.JPG',
      id: 9,
    },
    {
      DisplayName: 'Member Directory',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Member-DirectoryThumbnail@3x.JPG',
      id: 10,
    },
    {
      DisplayName: 'Member ID',
      Icon3x:
        'https://member.mycobaltsoftware.com/StagingSite/GetFileForApp?path=AppMenu/Member-ID-Thumbnail@3x.JPG',
      id: 11,
    },
  ];
  const NotificationBtnAction = () => {};

  const menuClicked = (menuIndex) => {
    if (menuIndex == 2) {
      navigation.navigate('Dining');
    }
  };

  const newsBtnAction = () => {};
  const viewNewsBtnAction = () => {};

  const renderItem = (item) => {
    return (
      <TouchableHighlight onPress={() => menuClicked(item.id)}>
        <View style={[styles.menuItemsCell]}>
          <ImageBackground
            source={{ uri: item.Icon3x }}
            style={styles.DashboardBackgroudImage}
          >
            <Text style={styles.txtUserName}>{item.DisplayName}</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <View style={styles.topView}>
        <ImageBackground
          source={require('../../../assets/images/Dashboard_background.png')}
          style={styles.DashboardBackgroudImage}
        >
          <Image
            source={require('../../../assets/images/avtar.png')}
            style={styles.profilePic}
          ></Image>
          <Text style={styles.txtUserName}>Hi, Dr.Bower!</Text>
          <Pressable
            style={styles.NotificationBtn}
            onPress={NotificationBtnAction}
          >
            <Image
              source={require('../../../assets/images/Notification.png')}
              style={styles.NotificationImage}
            ></Image>
          </Pressable>
          <Text style={styles.txtTime}>07:09 AM</Text>
          <Text style={styles.txtDate}>January 23, 2023</Text>
          <Text style={styles.txtTemperature}>53</Text>
          <Text style={styles.txtCity}>Boca Raton</Text>
          <Text style={styles.txtWeather}>Clear Sky</Text>
        </ImageBackground>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Pressable style={styles.newsBtn} onPress={NotificationBtnAction}>
          <Image
            source={require('../../../assets/images/News_icon.png')}
            style={styles.NotificationImage}
          ></Image>
        </Pressable>
        <Pressable style={styles.viewNewsBtn} onPress={NotificationBtnAction}>
          <Text style={styles.viewNewsText}> View News</Text>
        </Pressable>
        <Text style={styles.eventNameText}>Wine Down Wednesday Tasting!</Text>
        <Text style={styles.eventDateText}>01/29/2023</Text>
        <FlatList
          horizontal={true}
          style={styles.gridView}
          contentContainerStyle={styles.list}
          data={imagesArray}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.bottomView}>
          <Text style={styles.linkMember}>Link to Member Website</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
