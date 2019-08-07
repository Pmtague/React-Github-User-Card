import React from 'react';
// import styled from 'styled-components';
import { Card, Image, Icon } from 'semantic-ui-react';

// const extra = (
//     <a>
//       <Icon name='user' />
//       16 Friends
//     </a>
//   )

const UserCard = props => {
    console.log('PropsPropsProps', props)
    
    return (
//         <Card
//             image='/images/avatar/large/elliot.jpg'
//             header='Elliot Baker'
//             meta='Friend'
//             description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//             extra={extra}
//         />

        // <Card>
        //     <Image src={ props.avatar } wrapped ui={false} />
        //     <Card.Content>
        //         <Card.Header>{ props.name }</Card.Header>
        //         <Card.Meta>
        //             <span className='date'>Public Repos: { props.repos }</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             Following: { props.following }
        //         </Card.Description>
        //     </Card.Content>
        //     <Card.Content extra>
        //         Followers: { props.followers.map(item => (
        //             <div key={ item } className='followers-list'>
        //                 { item.login }
        //             </div>)) }
        //     </Card.Content>
        // </Card>
        <div>
            <img src={ props.avatar } alt='User image'/>
            <h3>{ props.name }</h3>
            <p>Public Repos: { props.repos }</p> 
            <p>Following: { props.following }</p>
            <p>Followers: { props.followers.map(item => (
                <div key={ item } className='followers-list'>
                    { item.login }
                </div>
            )) }</p>
        </div>
    )}

export default UserCard;