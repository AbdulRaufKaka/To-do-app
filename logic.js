const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask()
{
    if(inputBox.value === "")
    {
        alert("You must write Something!!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // calling here bcz what ever change we make should be save in our browser 
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked"); //classlist.toggle mtlb jb hum li ko click kry toh us m 'checked' clss add ho jay that was just a classlist , toggle ka mtlb agr toh class 'checked' de we h pehly s toh usy remove kr do or yeh new wli 'checked' do li ko 
        saveData();
    }
    else if ( e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove(); // parent element is the li it will remove the li 
        saveData();
    }
},false)





function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
// What ever content in listContainer will be stored in out browser with the name of data



// Displaying the data whenever we will open the website again 

function ShowTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

ShowTask();
// listContainer.addEventListener("click",function(e))

// themeButton.addEventListener("click",(e) =>
// {
//     document.body.classList.toggle('darkmode')
// })


// Target property contains the info on what element the event was triggered in this case is 'click'

