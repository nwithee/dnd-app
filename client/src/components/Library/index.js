import React from 'react';
import styled from 'styled-components';

//CSS Styling
    const Title = styled.h1`
            font-size: 3em;
            text-align: center;
        `;
    const Button = styled.button`
            font-size: 1em;
            border-radius: 10px;
        `;

function Library() {
    
    return (
        <header class="col-12">
            <Title>D&D Character Library</Title>
            <div>
                <Button>Create New Character</Button>
            </div>
        </header>
    )
}

export default Library;