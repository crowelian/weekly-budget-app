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
            const response = await fetch("https://softa.site/weekly_budget/test_fetch.php?login=true&week=1&year=2020&userid=3");
            const json = await response.json();
            this.setState({data: json.results, output: "Data Loaded..." });
        };

        render() {
            return (
                <View style={styles.container}>
                    <Text >{this.state.output}</Text>
                    <FlatList data={this.state.data}
                        keyExtractor={(x, i) => i}
                        renderItem={({ item }) => 
                            <Text>
                                {` WEEK: ${item.week_num} YEAR: ${item.year}`}
                                {` Week_info: ${item.extra_info} SUM: ${item.sum_to_use}`}
                                {` Budget_info: ${item.extra_budget_info} `}
                                
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

