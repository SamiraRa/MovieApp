import React, {useEffect, useState} from 'react';
import { View, Text, Image, LogBox, ScrollView, TextInput } from 'react-native';
import {POSTER_IMAGE} from '../config';
import {GET} from '../API';
import Loader from './Loader';
import Styles from '../Styles';
import axios from 'axios';


const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(true);
    const [state, setState] = useState('');

    useEffect (()=>{
    const getState = async () => {
        const data = await GET (props.url);
        setState(data.results);
        setLoading(false);
      };
            getState();
            }, []);
  
            const search  = () => {
              if(data.results == {movieId: item.id}){
                <FlatList
                keyExtractor={item => item.id}
                data={movies}
                vertical
                renderItem={item => displayMovies(item, props)}
              />
              }
              else "No Movies Found";
            }
            const displayMovies = ({item}, props) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.push('movieDetails', {movieId: item.id});
                  }}
                  style={{marginHorizontal: 10}}>
                  <Image
                    source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
                    style={Styles.posterImage}
                  />
                  <Text style={Styles.movieTitle}>{item.original_title}</Text>
                </TouchableOpacity>
              );
            };
            
  return (
    <View>
 
    <TextInput style={Styles.searchbox} 
    onChangeText ={ text => setState(prevState => text)}

    onSubmitEditing ={search}
    value={state}
    />

  </View>
  );
};



export default SearchMovies;