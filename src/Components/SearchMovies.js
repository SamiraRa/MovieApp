import React, {useState} from 'react';
import { View, Text, Image, LogBox, ScrollView, TextInput } from 'react-native';
import {POSTER_IMAGE} from '../config';
import {API_URL} from '../API';
import Loader from './Loader';
import Styles from '../Styles';
import axios from 'axios';
import { TouchableHighlight } from 'react-native-web';


const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(true);
    const [state, setState] = useState({
      s:'' ,
      results: [],
      selected: {}
    });

            const search = () => {
              axios(API_URL+state.s).then(({data})=>{
                let results = data.Search;
                setState(prevState => {
                  return {...prevState,results:results}
                })
              })
            }
            const openPopup = (id) =>{
              axios(API_URL+id).then(({data})=>{
                let result = data;
                console.log(result);
                setState(prevState => {
                  return{...prevState,selected: result};
                });
              });
            }
  return (
    <View >
 
    <TextInput style={Styles.searchbox} 
    onChangeText ={ text => setState(prevState => {
      return {...prevState, s: text}
    }) }

    onSubmitEditing ={search}
    value={state.s}
    />
    <ScrollView>
    {
      state.results.map(result =>(

        <TouchableHighlight listMode="SCROLLVIEW"
        key={result.item.id}
          onPress={() => {
            open.popup('movieDetails', {movieId: item.id});
          }}
          style={{marginHorizontal: 10}}>
          <Image
            source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
            style={Styles.posterImage}
          />
          <Text style={Styles.movieTitle}>{item.original_title}</Text>
          
        </TouchableHighlight>
      ))}
        </ScrollView>
     
   

  </View>

  );
};


  

export default SearchMovies;