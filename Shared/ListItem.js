import React, {PureComponent} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ListItem extends PureComponent{
    render () {
    return (
    <View style={styles.card}>
    <TouchableOpacity onPress={()=>this.props.GetSubCategory(this.props.data.id)}>
        <Image style={{width:this.props.itemWidth,height:100, borderTopLeftRadius: 6, borderTopRightRadius: 6}} source={this.props.data.src} />
        <Text style={{lineHeight: 25, marginHorizontal: 18}}>{this.props.data.name}</Text>
    </TouchableOpacity>
    </View>
    );
}
};

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderRadius:6,
        backgroundColor: '#D3D3D3'
    }
});

export default ListItem;