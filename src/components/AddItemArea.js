import React, { useState } from "react";
import styled from "styled-components/native";

const BoxItemArea = styled.View`
    background-color: #CCC;
    padding: 10px;
`;

const AddItemInput = styled.TextInput.attrs({
    placeholderTextColor: "#CCC"
})`
    background-color: #FFF;
    color: #000;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`;

export default (props) => {
    const [item, setItem] = useState('');
    const handleSubmit = () => {
        if (item.trim() != '') {
            props.onAdd(item.trim());
            setItem('');
        }
    }
    
    return (
        <BoxItemArea>
            <AddItemInput
                placeholder="Digite uma nova tarafa"
                value={item}
                onChangeText={e => setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </BoxItemArea>
    );
}