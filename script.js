//Add a click eventlistener to the convert button
document.getElementById('js-convert').addEventListener('click', () =>{
  //Get the current value of input field
  let userNumber = document.getElementById('js-number').value;
  let userBase = document.getElementById('js-base').value;
  //Get the result container
  let result = document.getElementById('js-result');

  //Convert the two input field from string to number
  userNumber = Number(userNumber);
  userBase = Number(userBase);

  //If a user enters a number less than 2 or grater than 36 it should result to an error
  if(userBase < 2 || userBase > 36){
    //The error message
    result.innerText = `Base must be between 2 and 36`;
    //Set the result color to red to indicate it's an error
    result.style.color = 'red';
  }else{
    //Convert the number enter by the user toString and pass userBase as an argument
    //This will convert the userNumber to the base entered
    result.innerText = userNumber.toString(userBase);
    //Set the result color to green to indicate it's a success
    result.style.color = 'rgba(25, 135, 84, 0.8)';
  }
});