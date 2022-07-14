import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client'
import { QUERY_CHARACTER } from '../../utils/queries';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [cclass, setClass] = useState('');
    const [race, setRace] = useState ('');

    const {error, data} = useQuery(QUERY_CHARACTER);

    useEffect(()=> {
        setCharacters(data.characters)
    }, [data])

    return (
            <Card>
                    <Img src = {require(`../../assets/charimages/dwarf.jpeg`)}></Img>
                    <div>Name: {name}</div>
                    <div>Level: {level}</div>
                    <div>Class: {cclass}</div>
                    <div>Race: {race}</div>
            </Card>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const Card = styled.div`
    box-shadow: 2px 3px 6px #626a54, 0 0 53px #8a4d0f inset;
    background: #f9f7f4 !important;
    filter: url(#wavy2);
    background-color: #f9f7f4 !important;
    border-radius: 15px;
    padding: 10px;
    &:hover {
        border-width: 0 2px 3px 0;
        margin-right: 4px;
        position: relative;
        left: 4px;
        bottom: 5px;
    }
    cursor: pointer;
`;

const Img = styled.img`
    margin: 2px;
    max-height: 150px;
    max-width: 150px;
    border-radius: 15px;
`;


export default Characters;