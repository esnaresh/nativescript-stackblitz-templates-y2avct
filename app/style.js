import { StyleSheet } from "react-native";
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

    DashboardBackgroudImage: {
        width: '100%',
        height: '100%'
    },
    topView: {
        marginLeft: 0,
        marginRight:0,
        marginTop:0,
        height: '25%',
        backgroundColor: 'black'
    },
    profilePic: {
        marginLeft: 20,
        marginBottom: 20,
        height: 80,
        width: 80
    },
    txtUserName: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 30,
        marginLeft: 20,
        color: 'white'
    },

    NotificationBtn: {
        marginLeft:300,
        height: 40,
        width: 40,
        top: -100,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NotificationImage: {
        width: 40,
        height: 40,
    },
    txtTime: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: -100,
        marginLeft: 20,
        color: 'white'
    },
    txtDate: {
        fontSize: 15,
        fontWeight: '300',
        marginBottom: -50,
        marginLeft: 20,
        color: 'white'
    },
    txtCity: {
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 30,
        marginLeft: 20,
        color: 'white'
    },
    txtWeather: {
        fontSize: 15,
        fontWeight: '300',
        marginBottom: 30,
        marginLeft: 20,
        color: 'white'
    },
    txtTemperature: {
        fontSize: 19,
        fontWeight: '500',
        marginBottom: 30,
        marginLeft: 20,
        color: 'white'
    },
    scrollView: {
        backgroundColor: Colors.lighter,
        height: '75%'
    },
    menuItemsCell: {
        width: 130,
        aspectRatio: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute'
    },
    menuItemsName: {
        fontSize: 15,
        fontWeight: '300',
        color: 'white'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        flex: 1
    },
    gridView:{
        height: '100%',
        width: '100%'
    },

    newsBtn: {
        marginLeft:20,
        height: 40,
        width: 40,
        top: 0,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewNewsText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#2A4E7D',
    },
    viewNewsBtn: {
        borderColor: '#2A4E7D',
        marginLeft: 20,
        marginBottom: 10,
        borderWidth: 1,
        width: 100,
        borderRadius: 20
    },
    eventNameText: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
        marginLeft: 20,
        color: '#4B5154'
    },
    eventDateText: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10,
        marginLeft: 20,
        color: '#949B9F'
    },
    bottomView: {
        marginLeft: 0,
        marginRight:0,
        marginBottom:0,
        height: 40,
        backgroundColor: 'blue',
        alignContent: 'center',
        alignItems: 'center',
        
    },
    linkMember:{
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        color: 'white',
        textAlignVertical: 'center'
    }

});

export default styles