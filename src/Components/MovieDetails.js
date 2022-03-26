import React, {useEffect, useState} from 'react';
import { View, Text, Image, LogBox, ScrollView } from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../API';
import Styles from '../Styles';
import Loader from './Loader';
import Constants from '../Constants';
import TopRatedMovies from './TopRatedMovies';



const MovieDetails = (props) => {
    const[loading, setLoading] = useState(true);
    const[details, setDetails] = useState();

    useEffect(() => {
        const getDetails = async () => {
          const data = await GET(`/movie/${props.route.params.movieId}`);
          setDetails(data);
          setLoading(false);
        };
    
        getDetails();
      }, []);

      useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
      }, [])
    return (
        <ScrollView nestedScrollEnabled={true} style={Styles.sectionBg}>
        {loading ? (
          <Loader />
        ) : (
          <View>
                <View>
                    <Image
                    source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
                    style={Styles.imageBg}
                    />
                </View>
                <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
                  

                <Text style={Styles.heading}>OVERVIEW</Text>
                <Text style={Styles.overview}>{details.overview}</Text>

                <View style={Styles.detailsContainer}>
                    <View>
                    <Text style={Styles.heading}>BUDGET</Text>
                    <Text style={Styles.details}>$ {details.budget}</Text>
                    </View>

                    <View>
                    <Text style={Styles.heading}>DURATION</Text>
                    <Text style={Styles.details}>{details.runtime} min.</Text>
                    </View>

                    <View>
                    <Text style={Styles.heading}>RELEASE DATE</Text>
                    <Text style={Styles.details}>{details.release_date}</Text>
                    </View>
                </View>

                

                <TopRatedMovies
                    title="SIMILAR MOVIES"
                    navigation={props.navigation}
                    url={`/movie/${props.route.params.movieId}/similar`}
                />
          </View>
        )}
      </ScrollView>
  )
}

export default MovieDetails;