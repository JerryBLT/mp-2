
import styled from "styled-components";
import {Character} from "../interfaces/Character.ts"

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
    border: 3px solid;
    border-radius: 100px;
    margin: 10px;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 40%;
    padding: 3%;
    margin: 1%;
    background-color: ${(props) => (props.status === 'Alive' ? '#ADD8E6' : props.status === 'Deceased'  ? '#d63838' : props.status === 'Destroyed'? '#880808' : '#808080')};
    color: ${(props) => (props.status == "Alive" ? 'black' : props.status == 'Deceased' ? 'white' : 'pink')};
    border: 2px black solid;
    align-items: center;
`;

const CharacterName = styled.h1`
    font-size: calc(10px + 10px);
    text-align: center;
`;

const Info = styled.p`
    margin: 4px;
    text-align: center;
`;

const Image = styled.img`
    width: 70%;
    border-radius: 30%;
    border: 2px black dashed;
`;

export default function FinalSpace({data}:{data:Character}){
    return(
        <AllCharsDiv>
            <SingleCharDiv key={data.id} status={data.status}>
                <CharacterName>Name: {data.name}</CharacterName>
                <Image src={data.img_url} alt={'Picture of ${data.name}'}/>
                <Info><strong>Status:</strong> {data.status}</Info>
                <Info><strong>Species:</strong> {data.species}</Info>
                <Info><strong>Gender:</strong> {data.gender}</Info>
                <Info><strong>Orgin:</strong> {data.origin}</Info>
                <Info><strong>Abilities:</strong> {data.abilities.join(", ")}</Info>
                <Info><strong>Alias:</strong> {data.alias.join(", ")}</Info>
            </SingleCharDiv>
        </AllCharsDiv>
    )
}