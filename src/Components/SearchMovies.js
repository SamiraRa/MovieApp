import React, {useEffect,useState} from 'react';
import { View, Text, Image, LogBox, ScrollView, TextInput } from 'react-native';
import {Button, Textfield} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import {POSTER_IMAGE} from '../config';
import {GET} from '../API'
import Loader from './Loader';
import Styles from '../Styles';
import axios from 'axios';

import { FlatList, TouchableHighlight } from 'react-native-web';
import { TextField } from '@mui/material';


const SearchMovies = () => {
    const [searchText, setSearchText] = useState("");
    const[loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

            const Search = async () => {
              try{
                const {data} = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=2057ebea8436d7331724b6b9edcf1e78&language=en-US&query=${searchText}&include_adult=false');
              setContent(data.results);         
              }catch(error){console.error(error);}};
              
              useEffect(()=>{
               
                Search();
              },[])

            useEffect(() => {
              LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
            }, [])
          
  return (
    <ScrollView nestedScrollEnabled={true} style={Styles.sectionBg}>
    {loading ? (<Loader />) :
    (
    <View>
    <TextInput
    style={Styles.searchbox} 
    onChangeText ={ (e)=> setSearchText(e.target.value) }
    onSubmitEditing ={Search}
    />
    <Button 
    onClick={Search}
    variant="contained"
    style={{marginLeft:10}} >
    <SearchIcon fontSize='large' />
    </Button>
  
    
    { content &&
      content.map((c)=>(
      <FlatList 
      key = {c.id}
      id={c.id}
      data={movies}
      poster={c.poster_path}
      title={c.title || title.name}
      renderItem={c => displayMovies(item, props)}
      />
    ))};
   
    </View>
    )}
    </ScrollView>
     ); 
};
const displayMovies = ({item}, props) => {
  return (
 
      
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('movieDetails', {movieId: c.id});
      }}
      style={{marginHorizontal: 10 , marginBottom: 20}}>
      <View className='image-container d-flex justify-content-start m-3'>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
        resizeMode= 'cover'
      />
      <View className='overlay d-flex align-items-center justify-content-center'></View>
      </View>
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>

  );
};


  

export default SearchMovies;