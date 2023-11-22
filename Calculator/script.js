let otpt = document.querySelector(".result"); //select element to display result
let buttons = document.querySelectorAll(".btn"); //select buttons

let string = ""; //to store a result

let btnArray = Array.from(buttons); //store btn element as structured array
btnArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      string = eval(string);
      otpt.value = string;
      console.log(string);
    } else if (e.target.value == "AC") {
      string = "";
      otpt.value = 0;
    } else if (e.target.value == "DE") {
      if (string.length == 1 || string.length == 0) {
        otpt.value = 0;
        string = 0;
        // console.log(string.length);
      } else {
        string = string.substring(0, string.length - 1);
        otpt.value = string;
        // console.log(string.length);
      }
    } else if ( //to use operator with 0 in intial stage and to remove bug that concating the operators
      e.target.value == "+" ||
      e.target.value == "-" ||
      e.target.value == "*" ||
      e.target.value == "/" ||
      e.target.value == "%"
    ) {
      string = otpt.value; //asiign initial display value to string so we can use operator with 0 in intial stage

      if ( //code to remove last operator
        string[string.length - 1] == "+" ||
        string[string.length - 1] == "-" ||
        string[string.length - 1] == "*" ||
        string[string.length - 1] == "/" ||
        string[string.length - 1] == "%"
      ) {
        console.log(string);
        string = string.substring(0, string.length - 1);
        // console.log(string);
        string += e.target.value;
        // console.log(string);
        // console.log(string[string.length - 1]);
        // otpt.value = string;
      }
      else{
        // console.log(string[string.length - 1]);
        // console.log(string);
        string += e.target.value;
        otpt.value = string;
      }
    } else {
      if (string == "0") {
        string = "";
      }
      console.log(e.target.value + " clicked");
      string += e.target.value;
      // console.log(string);
      otpt.value = string;
      // console.log(otpt.values);
    }
  });
});
