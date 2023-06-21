import React from 'react'
    
    function Character_two(character) {
        return (
            <div>
                <h3>My name is {character.name}</h3>
            
                <img src={character.image} alt={character.name} width='300' />
                <p>{'Origin: ${character_two.origin && Character_two.origin.name}'}</p>
            </div>
        );
    };

    export default Character_two;