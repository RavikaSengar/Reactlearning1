import React from "react";
const UserData = {
  firstName: "Ravika",
  lastName: "Sengar",
  title: "Student",
};

function OutputtingDynamicContent() {
  return (
    <>
      <h2 style={{color:'#dca3ff'}}> {UserData.firstName} {UserData.lastName}</h2>
      <p style={{color:'#dca3ff'}}> {UserData.title}</p>
    </>
  );
}

export default OutputtingDynamicContent;
