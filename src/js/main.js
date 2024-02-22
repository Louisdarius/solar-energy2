

// The sho Blog functions reveal the hidden parts of the blogs

function showBlog1()
{
    var x = document.getElementById("hiddenPart1"); // Assignes the element with ID "hiddenPart1" to a variable X
    var y = document.getElementById("readMore1");
    x.style.display="inline";
    y.style.display="none";  // After the hidden element has been displayed, the "readmore button becomes invisible"
}

function showBlog2()
{
    var x = document.getElementById("hiddenPart2");
    var y = document.getElementById("readMore2");
    x.style.display="inline";
    y.style.display="none";
}

function showBlog3()
{
    var x = document.getElementById("hiddenPart3");
    var y = document.getElementById("readMore3");
    x.style.display="inline";
    y.style.display="none";
}

function showBlog4()
{
    var x = document.getElementById("hiddenPart4");
    var y = document.getElementById("readMore4");
    x.style.display="inline";
    y.style.display="none";
}

function showBlog5()
{
    var x = document.getElementById("hiddenPart5");
    var y = document.getElementById("readMore5");
    x.style.display="inline";
    y.style.display="none";
}

function showBlog6()
{
    var x = document.getElementById("hiddenPart6");
    var y = document.getElementById("readMore6");
    x.style.display="inline";
    y.style.display="none";
}

function showBlog7()
{
    var x = document.getElementById("hiddenPart7");
    var y = document.getElementById("readMore7");
    x.style.display="inline";
    y.style.display="none";
}

// Form page

// This function shows the form that was initially hidden by CSS
function showForm(){
   var y = document.getElementById("formContainer");
   var z = document.getElementById("getInTouchBtn");
   y.style.display="block";
   z.style.display="none";
}

// This function reset the form to blank
function resetForm()
{
    document.getElementById("contactForm").reset(); // This line obtains the form element by its ID (contactForm)
                                                    // and uses the reset method to clear all the field within it
}


function submitted()
{
    var name = document.callBackForm.fname.value; // Assignes the value of the name input to a variable
    var phone = document.callBackForm.phone.value;
    var newline = "\r\n"; // forces texts to a new line

    alert("Thank you for contacting us, " + name + "." + newline +
           "We will give you a call back on " + phone + " shortly." + newline +
           "Bye for now.");
    
}