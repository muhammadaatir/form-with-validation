var getData = JSON.parse(localStorage.getItem("data"))


function afterSignin() {
    event.preventDefault();
    document.getElementById("sign_div").classList.add("hidden")
    document.getElementById("result_div").classList.remove("hidden")
    for (var count = 0; count < getData.length; count++) {
        var fullName = getData[count].name;
        var fatherName = getData[count].father;
        var gender = getData[count].gender;
        var cnic = getData[count].cnic;
        var qual = getData[count].qualification;
        var course = getData[count].course;
        var tableRow = document.getElementById("table_row")
        tableRow.innerHTML += `
        <tr>
        <td> ${fullName} </td>
        <td> ${fatherName} </td>
        <td> ${gender} </td>
        <td> ${cnic} </td>
        <td> ${qual} </td>
        <td> ${course} </td>
        <td> <button class="btn" >Delete</button> </td>
        <td> <button class="btn" >Edit</button> </td>
        </tr>
        `
        console.log("hn");
    }
}