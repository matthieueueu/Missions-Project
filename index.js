const print = console.log;

let missionNameArray = []
let missionPriorityArray = []
let dangerLevelArray = []



function onClickSubmit(){
    let missionNameArrayLength = missionNameArray.length;


    missionNameArray.push(document.getElementById("missionName").value)
    missionPriorityArray.push(document.getElementById("missionPriority").value)
    dangerLevelArray.push(document.getElementById("dangerLevel").value)
    
    // 1. Separate your for loop that prints out the missions as a separate function
    
    for(var i=missionNameArrayLength-1; i<missionNameArrayLength; i++){

        if (missionNameArray.length > 5){
            alert("You have too many missions!")
            
            // document.getElementById("showMissions").innerHTML -= `<h3>Mission name = ${missionNameArray[i+1]}</h3>`
            // document.getElementById("showMissions").innerHTML -= `<h3>Mission priority = ${missionPriorityArray[i+1]}</h3>`
            // document.getElementById("showMissions").innerHTML -= `<h3>Danger Level = ${dangerLevelArray[i+1]}</h3>`
        } else {
            
            document.getElementById("showMissions").innerHTML += `<h1>Mission #${i+2}</h1>`

            document.getElementById("showMissions").innerHTML += `<h3>Mission name = ${missionNameArray[i+1]}</h3>`
            document.getElementById("showMissions").innerHTML += `<h3>Mission priority = ${missionPriorityArray[i+1]}</h3>`
            document.getElementById("showMissions").innerHTML += `<h3>Danger Level = ${dangerLevelArray[i+1]}</h3>`

        }

    }


    
    document.getElementById("missionName").value = ''
    document.getElementById("missionPriority").value = ''
    document.getElementById("dangerLevel").value = ''

}

function onClickDelete(){
    let missionNameArrayLength = missionNameArray.length;
    
    let missionToDelete = document.getElementById("chooseMissionToDelete").value
    
    print(missionNameArray)    

    missionNameArray.splice(missionToDelete-1,1)
    missionPriorityArray.splice(missionToDelete-1,1)
    dangerLevelArray.splice(missionToDelete-1,1)

    print(missionNameArray) 
    print('length of updated array', missionNameArray.length)
    document.getElementById("showMissions").innerHTML = ``
    
    // i = 1
    // length = 2
    for(var i=0; i<missionNameArray.length; i++){
        console.log('i is', i)
        document.getElementById("showMissions").innerHTML += `<h1>Mission #${i+1}</h1>`

        document.getElementById("showMissions").innerHTML += `<h3>Mission name = ${missionNameArray[i]}</h3>`
        document.getElementById("showMissions").innerHTML += `<h3>Mission priority = ${missionPriorityArray[i]}</h3>`
        document.getElementById("showMissions").innerHTML += `<h3>Danger Level = ${dangerLevelArray[i]}</h3>`
    }
    
}