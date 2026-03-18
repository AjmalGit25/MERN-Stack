import ChildComp from "./ChildComp";

function ParentComp() {
  const receiveData = (data) => {console.log("Data from child:", data);}
  return <ChildComp sendData={receiveData} />;

}

export default ParentComp;