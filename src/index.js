import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div>
      <h1>UDemyCourse React</h1>
      <h2>Component & practice: June 2019</h2>

      <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4 style={{alignSelf:'center'}}>WARNING</h4>
        Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
          <CommentDetail
          image={faker.image.avatar()}
          author="Sam" timeAgo="Today at 4:55pm"
          content="Great idea!"
          />
      </ApprovalCard>

      <ApprovalCard>
          <CommentDetail
          image={faker.image.avatar()}
          author="Max"
          timeAgo="Today at 2:05pm"
          content="I'm in!"
          />
      </ApprovalCard>

      <ApprovalCard>
          <CommentDetail
          image={faker.image.avatar()}
          author="Allo"
          timeAgo="Yesterday at 10:55am"
          content="Let's do it!!"
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        image={faker.image.avatar()}
        author="Tay"
        timeAgo="Yesterday at 7:03am"
        content="Anyone want to go to Golden Gardens at 6pm tomorrow for a BBQ potlock?"
        />
     </ApprovalCard>

      </div>
        <br/>
        <p style={{fontStyle:'italic', fontSize:'1em'}}> Created using faker, React, ReactDOM, JSX</p>
      </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)