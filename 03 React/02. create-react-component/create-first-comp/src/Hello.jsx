function Hello() {
  let firstName = 'Prashant';
  let lastName = 'Jain';
  let phoneNo = 9876543210;
  let luckyNumber = Math.random() * 100;
  let fullName = () => {
    return firstName + ' ' + lastName;
  }

  return <p>
    Hello World! I am learning React. I'm {fullName()}
    <br />
    My mobile number is: {phoneNo}
    <br />
    My lucky number is: {luckyNumber}
  </p>;
}

export default Hello;