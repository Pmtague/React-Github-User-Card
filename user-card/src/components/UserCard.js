import React from 'react';
import styled from 'styled-components';

const UserCard = props => {
    console.log('PropsPropsProps', props)
    const Wrapper = styled.div`
        vh: 90%;
        vw: 70%;
        `;

    const Image = styled.img`
        height: 90%;
        width: auto;
        `;
    
    return (
        <Wrapper>
            <Image />
            <h3>{ props.name }</h3>
            <p>Public Repos: { props.repos }</p> 
            <p>Following: { props.following }</p>
            <p>Followers: { props.followers.map(item => (
                <div key={ item } className='followers-list'>
                    { item.login }
                </div>
            )) }</p>
        </Wrapper>
    )
}

export default UserCard;