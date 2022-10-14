import React from "react";


const HighScores = (props) => {

 let people = [];
  return (
    <div className="outer">
      <div className=" high-scores ">
        <h1>ALL HIGH SCORES</h1>
        <div className="table-wrapper">
        <table>
         
          <tbody>
            {props.scores.forEach((country) => {
              country.scores.map((person) => {
                return people.push(person);
              });
            })}
            {people
             
              .map((person, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{person.n}</td>
                    <td>{person.s}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </div>
      </div>
      </div>
)};




      export default HighScores
