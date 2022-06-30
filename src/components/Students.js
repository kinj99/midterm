import React from 'react';
import Student from './Student';



function Students() {
    const cardInfo = [
        {
            image:'s1.png',
            name: "Mike",
            gpa: 3.8
          },
          {
            image:'s2.png',
              name: "Manal",
              gpa: 3.6
          },
          {
            image:'s3.png',
              name: "Moe",
              gpa: 3.2
          },
          {
            image:'s4.png',
              name: 'Mary',
              gpa: 2.6
          }
    ];

    const studentCards = cardInfo.map(cards => <Student cards={cards}/>)

  return (
    <div>
      <h1>Student List</h1>
      <div key={cardInfo.name}>{studentCards}</div>
    </div>
  )
}

export default Students;