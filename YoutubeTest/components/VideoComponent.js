import React, {Component} from 'react';
import Button from 'react-native-button';
import Youtube from 'react-native-youtube';
import {
    Dimensions, Text, View, Image, Alert, Platform, TextInput, FlatList, default as Linking, StyleSheet,WebView
} from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0.1,
            paused: false,
            overlay: false
        };
    }
    render(){
        const {currentTime, duration, paused, overlay}= this.state;
        return(



            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>



                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Videos of Youtube list
                </Text>
                <Video source={{ uri: 'https://www.youtube.com/watch?v=nuoP52d0kqI' }} />


                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New video information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                               onChangeText={(text) => this.setState({ movieName: text })}
                               value={this.state.movieName}
                               placeholder='Enter new video '
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                               onChangeText={(text) => this.setState({ releaseYear: text })}
                               value={this.state.releaseYear}
                               placeholder='Enter some thing'
                               keyboardType='numeric'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchVideos();
                        }}>
                        Fetch videos
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            // const {movieName, releaseYear} = this.state;
                            // if (!movieName.length || !releaseYear.length){
                            //     alert('You must enter movie name and release year');
                            //     return;
                            // }
                            // this.props.on({name: movieName, releaseYear: releaseYear});

                        }}>
                        Add Something ("Don't care!!!!")
                    </Button>

                </View>

                <FlatList
                    data={this.props.videos}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'

                    }}>

                        {`${item.title},url=${item.url}`}


                        {/*<WebView*/}
                        {/*    javaScriptEnabled={true}*/}
                        {/*    domStorageEnabled={true}*/}
                        {/*    source={{uri: `https://www.youtube.com/embed/U4fqMMKo9ns?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0"`}}/>*/}


                    </Text>

                    }
                />
            </View>);
    }
}
