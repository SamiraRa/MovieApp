import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    sectionBg: {
        backgroundColor: Constants.baseColor,
        height: deviceHeight,
        
      },
    heading: {
        fontSize: 19,
        fontWeight: '700' ,
        color: Constants.fadedColor,
        margin: 10,
      },
    posterImage: {
        height: 300,
        width: '100%',
        borderRadius: 10,
      },
      movieTitle: {
        color: Constants.textColor,
        width: deviceWidth,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
      },
      imageBg: {
        width: deviceWidth,
        height: 250,
      },
      detailsMovieTitle: {
        fontSize: 28,
        color: Constants.textColor,
        textAlign: 'center',
        marginTop: -40,
      },
      overview: {
        color: Constants.textColor,
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 16,
      },
      details: {
        color: Constants.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      searchbox:{
        fontSize: 20,
        fontWeight: '300',
        padding: 10,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 40,
      },
      results:{
        flex: 1,
      },
      result:{
        flex: 1,
        width: '100%',
        marginBottom:20
      }
});
export default Styles;