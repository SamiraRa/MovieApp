import React from 'react';
import { View } from 'react-native';
import SearchMovies from './Components/SearchMovies';
import TopRatedMovies from './Components/TopRatedMovies'
import Styles from './Styles'


const Home = (props) => {
  return (
    <View style={Styles.sectionBg}>
    <SearchMovies 
    url="/search/movie" 
    navigation={props.navigation} 
    />
    <TopRatedMovies
    title="Top Rated Movies"
    url="/movie/top_rated"
    navigation={props.navigation}    
  />

      
    </View>
  )
}


export default Home
