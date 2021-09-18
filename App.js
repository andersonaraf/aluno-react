import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Dimensions, LogBox } from 'react-native';
import { NativeBaseProvider, Input, Text, Stack, FormControl, Heading, Collapse, Button, Center } from 'native-base';
import InputControl from './src/components/InputControl';
import TaskView from './src/view/TaskView';

LogBox.ignoreAllLogs();
const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Item = styled.TouchableHighlight`
  padding: 10px;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #fff;
`;

const BoxT = styled.View`
  border: 1px;
  border-radius: 10px;
  border-color: #000;
  border-style: dashed;
  width: ${Dimensions.get('window').width - 10}px;
  margin-top: 10px;
`;

export default () => {
  
  const [nameStudent, setNameStudent] = useState('');
  const [nameCourse, setNameCourse] = useState('');
  const [nameSubject, setNameSubject] = useState('');
  const [noteOne, setNoteOne] = useState('0');
  const [noteTwo, setNoteTwo] = useState('0');
  const [absences, setAbsences] = useState('0');
  const [meeting, setMeeting] = useState('0');
  const [average, setAverage] = useState('0');
  const [status, setStatus] = useState('Reprovado');


  function CollapseComponent() {
    const [show, setShow] = React.useState(false);
    let faltasPorcento = (((parseInt(absences)*100)/parseInt(meeting)) > '25' ? true : false);
    console.log(((parseInt(absences)*100)/parseInt(meeting)))
    let media = 0;
    if (noteOne != 0 || noteTwo != 0) {
      media = (parseFloat(noteOne) + parseFloat(noteTwo)) / 2;
      if (media >= 7.0 && faltasPorcento == false) {
        console.log(faltasPorcento)
        setStatus('Aprovado');
      } else setStatus('Reprovado');
      setAverage(media);
    } else {
      setAverage('0');
    }

    const handleToggle = () => setShow(!show);

    return (
      <Stack space={4} mx={8} mb={2} mt={2}>
        <Collapse isOpen={show}>
          <Heading>Relatório</Heading>
          <FormControl.Label>Nome do Aluno: {nameStudent}</FormControl.Label>
          <FormControl.Label>Curso/Diciplina: {nameCourse}/{nameSubject}</FormControl.Label>
          <FormControl.Label>Nota 1: {noteOne}</FormControl.Label>
          <FormControl.Label>Nota 2: {noteTwo}</FormControl.Label>
          <FormControl.Label>Encontros/Faltas: {meeting}/{absences}</FormControl.Label>
          <FormControl.Label>Média: <Text>{average}</Text></FormControl.Label>
          <FormControl.Label>Status de Aprovação: {status}</FormControl.Label>
        </Collapse>
        <Button size="sm" colorScheme="primary" onPress={handleToggle}>
          <Text color="white">{show ? 'Fecha' : 'Verificar Status'}</Text>
        </Button>
      </Stack>
    );
  }

  return (
    <Page>
      <Scroll>
        <NativeBaseProvider>
          <BoxT>
            <Stack w="100%" space="2" marginLeft="2" marginBottom="2">
              <Text fontSize="lg" bold>Informações do Aluno: </Text>
              <InputControl nameLabel="Nome do Aluno: " nameInputPlaceHolder="Anderson Araújo Ferreira" value={nameStudent} onChangeText={t => setNameStudent(t)} />
              <InputControl nameLabel="Curso: " nameInputPlaceHolder="SPI" value={nameCourse} onChangeText={t => setNameCourse(t)} />
            </Stack>
          </BoxT>

          <BoxT>
            <Stack w="100%" space="2" marginLeft="2" marginBottom="2">
              <Text fontSize="lg" bold>Informações da Disciplina: </Text>
              <InputControl nameLabel="Diciplina: " nameInputPlaceHolder="Dispositivos móveis" value={nameSubject} onChangeText={t => setNameSubject(t)} />
              <InputControl nameLabel="Nota 1: " nameInputPlaceHolder="10" value={noteOne} onChangeText={t => setNoteOne(t)} keyboardType="numeric" />
              <InputControl nameLabel="Nota 2: " nameInputPlaceHolder="10" value={noteTwo} onChangeText={t => setNoteTwo(t)} keyboardType="numeric" />
              <InputControl nameLabel="Quantidade de Faltas: " nameInputPlaceHolder="0" value={absences} onChangeText={t => setAbsences(t)} keyboardType="numeric" />
              <InputControl nameLabel="Total de Encontros: " nameInputPlaceHolder="0" value={meeting} onChangeText={t => setMeeting(t)} keyboardType="numeric" />
            </Stack>
          </BoxT>
          <CollapseComponent/>
          <TaskView />
        </NativeBaseProvider>
      </Scroll>
    </Page>
  )
}