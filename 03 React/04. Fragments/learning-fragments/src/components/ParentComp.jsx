import ChildComp from "./ChildComp";

function ParentComp() {
  const receiveData = (data) => {console.log("Data from child:", data);};
  // Parent passing a function to its child as prop: sendData
  return <ChildComp sendData={receiveData} />;

}

export default ParentComp;