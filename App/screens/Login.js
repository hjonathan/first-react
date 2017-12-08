import React, {Component} from "react";
import {FlatList} from "react-native";
import {List, ListItem} from "react-native-elements";

class FlatListDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total_count: 0,
            data: [],
            page: 1,
            seed: 1,
            error: "error",
            incomplete_results: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const {page, seed} = this.state;
        const url = "https://api.github.com/search/repositories?q=processmaker";// https://developer.github.com/v3/search/

        this.setState({loading: true});

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.items,
                    total_count: res.total_count,
                    incomplete_results: res.incomplete_results
                });
            })
            .catch(error => {
                this.setState({error});
            });
    };

    render() {
        return (
            <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ListItem
                            title={`${item.full_name}`}
                            subtitle={item.owner.login}
                            containerStyle={{borderBottomWidth: 0}}
                        />
                    )}
                    keyExtractor={item => item.name}

                />
            </List>
        );
    }
}

export default FlatListDemo;