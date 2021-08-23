import React from 'react';
import { NativeBaseProvider, Collapse, Text, Stack, Heading, Button, Center } from 'native-base';
import styled from 'styled-components/native';
import tasks from '../lists/task';

const Item = styled.TouchableHighlight`
  padding: 10px;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #000;
`;

function CollapseComponent() {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);


    return (
        <Stack space={4} mx={8}>
            <Collapse isOpen={show}>
            <Heading>Tarefas</Heading>
                {tasks.map((item, index) => {
                    return (
                        <Item key={index} onPress={() => { }} underlayColor="transparent" activeOpacity={0.1}>
                            <>
                                <ItemText>{item.task}</ItemText>
                                <ItemCheck></ItemCheck>
                            </>
                        </Item>
                    );
                })}
            </Collapse>
            <Button size="sm" colorScheme="emerald" onPress={handleToggle}>
                <Text color="white"> {show ? 'Fecha Tarefas' : 'Mostra Tarefas'}</Text>
            </Button>
        </Stack>
    );
}
export default function () {
    return (
        <CollapseComponent />
    );
}