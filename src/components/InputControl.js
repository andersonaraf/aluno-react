import React from 'react'
import { Input, FormControl, Text } from "native-base"
import { Dimensions } from 'react-native'

export default (props) => {

    return (
        <>
            <FormControl.Label bold>{props.nameLabel == null ? 'Nome do Campo' : <Text bold>{props.nameLabel}</Text>}</FormControl.Label>
            <Input keyboardType={props.keyboardType} w={Dimensions.get('window').width - 50} placeholder={props.nameInputPlaceHolder == null ? 'Nome do PlaceHolder' : props.nameInputPlaceHolder} value={props.value} onChangeText={props.onChangeText}/>
        </>
    )
}