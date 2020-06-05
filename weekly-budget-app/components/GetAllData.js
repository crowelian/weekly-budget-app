import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

export class GetData extends Component {
        
        state = {
            data: [],
            output: "No Data state",
        };

        componentWillMount() {
            this.fetchData();
        }

        fetchData = async () => {
            const response = await fetch("https://softa.site/weekly_budget/test_fetch.php?login=true&week=1&year=2020");
            const json = await response.json();
            this.setState({data: json.results });
        };


        render() {
            return (
                <View style={styles.container}>
                    <Text >{this.state.output}</Text>
                    <FlatList data={this.state.data}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) => 
                            <Text>
                                {`WEEK: ${item.week_num} YEAR: ${item.year}`}
                            </Text>
                        }
                    />
                </View>
                
            );
        }
            
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: "center",
    }
})

