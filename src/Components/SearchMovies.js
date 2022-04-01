import React, {useEffect,useState} from 'react';
import { View, Text, Image, LogBox, ScrollView, TextInput } from 'react-native';
import {Button, Textfield} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import {POSTER_IMAGE} from '../config';
import {GET} from '../API'
import Loader from './Loader';
import Styles from '../Styles';
import axios from 'axios';

import { TouchableHighlight } from 'react-native-web';


const SearchMovies = () => {
    const [searchText, setSearchText] = useState("");
    const[loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

            const Search = async () => {
              try{
                const {data} = await axios.get('https://api.themoviedb.org/3/search/movie?2057ebea8436d7331724b6b9edcf1e78&languages=en-US&query=${searchText}&include_adult=false');
              setContent(data.results);         
              }catch(error){console.error(error);}};
              
              useEffect(()=>{
               
                Search();
              },[])

            useEffect(() => {
              LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
            }, [])
          
  return (
    <View >
    <TextInput style={Styles.searchbox} 
    onChangeText ={ (e)=> setSearchText(e.target.value) }
    onSubmitEditing ={Search}
    />
    
  </View>

  );
};


  

export default SearchMovies;