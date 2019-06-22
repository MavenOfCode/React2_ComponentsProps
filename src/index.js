import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div>
      <h1>UDemyCourse React</h1>
      <h2>Container practice: June 2019</h2>

      <div className="ui container comments">
      <CommentDetail
      image={faker.image.avatar()}
      author="Sam" timeAgo="Today at 4:55pm"
      content="Great idea!"
      />
      <CommentDetail
      image={faker.image.avatar()}
      author="Max"
      timeAgo="Today at 2:05pm"
      content="I'm in!"
      />
      <CommentDetail
      image={faker.image.avatar()}
      author="Allo"
      timeAgo="Yesterday at 10:55am"
      content="Let's do it!!"
      />
      <CommentDetail
      image={faker.image.avatar()}
      author="Tay"
      timeAgo="Yesterday at 7:03am"
      content="Anyone want to go to Golden Gardens at 6pm tomorrow for a BBQ potlock?"
      />
      </div>
        <br/>
        <p style={{fontStyle:'italic', fontSize:'1em'}}>     Created using faker, react, reactDOM, JSX</p>
      </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)