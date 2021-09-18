import React from "react";
import styled from "styled-components/native";

const ListaItemSwipe = styled.TouchableHighlight`
    width: 100%;	
    height: 50px;
    background-color: #f00;
    justify-content: center;
`;

const ListItemIcon = styled.View`
    width: 20px;
    height: 20px;
    background-color: #fff;
    margin-left: 15px;
`;

export default (props) => {
    return (
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
            <ListItemIcon>

            </ListItemIcon>
        </ListaItemSwipe>
    );
}