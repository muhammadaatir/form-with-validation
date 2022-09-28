var nameInput = document.querySelector("#name_input")
var fNameInput = document.querySelector("#fName_input")
var genderMale = document.querySelector("#gender_input_male")
var genderFemale = document.querySelector("#gender_input_female")
var cnicInput = document.querySelector("#cnic_input")
var ageInput = document.querySelector("#age_input")
var dobInput = document.querySelector("#dob_input")
var phoneInput = document.querySelector("#phone_input")
var pakNat = document.querySelector("#pak_nat")
var othNat = document.querySelector("#oth_nat")
var khiCity = document.querySelector("#city_khi")
var lhrCity = document.querySelector("#city_lhr")
var islCity = document.querySelector("#city_isl")
var otherCity = document.querySelector("#city_oth")
var addressInput = document.querySelector("#address_input")
var qualMiddle = document.querySelector("#qual_middle")
var qualMatric = document.querySelector("#qual_matric")
var qualInter = document.querySelector("#qual_inter")
var qualDae = document.querySelector("#qual_dae")
var qualGrad = document.querySelector("#qual_grad")
var qualMaster = document.querySelector("#qual_master")
var qualPhd = document.querySelector("#qual_phd")
var courseWam = document.querySelector("#course_wam")
var courseAib = document.querySelector("#course_aib")
var courseCco = document.querySelector("#course_cco")
var courseCca = document.querySelector("#course_cca")
var courseGraphic = document.querySelector("#course_graphic")
var picInput = document.querySelector("#pic_input")
var emailInput = document.querySelector("#email_input")
var arr;

// function genderCheck() {
//     if (genderMale.checked) {
//         alert("hello")
//     }
// }
// if (genderMale.checked || genderFemale.checked) {
//     genderCheck();
//     console.log(genderMale.checked)
// }

// console.log(genderFemale.checked)


// function nicvalidation() {
//     if (/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic_value)) {
//         cnicInput.style.border = "1px solid green";
//     } else {
//         cnicInput.style.border = "1px solid red";
//     }
// }


function formValidation() {
    if (/^\s*[0-9a-zA-Z][0-9a-zA-Z ]*$/.test(nameInput.value)) {
        if (/^\s*[0-9a-zA-Z][0-9a-zA-Z ]*$/.test(fNameInput.value)) {
            if (genderMale.checked || genderFemale.checked) {
                if (/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnicInput.value)) {
                    if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(dobInput.value)) {
                        if (/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(phoneInput.value)) {
                            if (pakNat.checked || othNat.checked) {
                                if (khiCity.checked || lhrCity.checked || islCity.checked || otherCity.checked) {
                                    if (/^[a-zA-Z0-9\s,'-]*$/.test(addressInput.value)) {
                                        if (qualMiddle.checked || qualMatric.checked || qualInter.checked || qualDae.checked || qualGrad.checked || qualMaster.checked || qualPhd.checked) {
                                            if (courseAib.checked || courseWam.checked || courseCco.checked || courseCca.checked || courseGraphic.checked) {
                                                if (picInput !== "") {
                                                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
                                                        swal("Your Form Has Been Submitted!", " ", "success");
                                                        storeData();
                                                        nameInput.value = "";
                                                        fNameInput.value = "";
                                                        cnicInput.value = "";
                                                        dobInput.value = "";
                                                        phoneInput.value = "";
                                                        addressInput.value = "";
                                                        picInput.value = "";
                                                        ageInput.value = "";
                                                        emailInput.value = "";
                                                        uncheck();

                                                    } else {
                                                        swal("Enter Valid E-Mail Address!", " ", "error");

                                                    }
                                                } else {
                                                    swal("Upload Your Recent Picture!", " ", "error");

                                                }
                                            } else {
                                                swal("Select The Course!", "Select The Course In Which You Want to Get Admission ", "error");

                                            }
                                        } else {
                                            swal("Select Your Last Qualification!", " ", "error");

                                        }
                                    } else {
                                        swal("Enter Your Present Address!", " ", "error");

                                    }
                                } else {
                                    swal("Select Your Living City!", " ", "error");

                                }
                            } else {
                                swal("Select Your Nationality!", " ", "error");

                            }
                        } else {
                            swal("Incorrect Phone Number!", "Enter Correct Phone Number!", "error");

                        }
                    } else {
                        swal("Incorrect Date of Birth!", "Enter Correct Date of Birth!", "error");
                    }
                } else {
                    swal("Incorrect CNIC Number!", "Enter CNIC Number with Correct Format (xxxxx-xxxxxxx-x)!", "error");
                }
            } else {
                swal(" ", " Select Your Gender!", "error");
            }
        } else {
            swal("Incorrect Name!", "Enter Correct Father Name!", "error");
        }
    } else {
        swal("Incorrect Name!", "Enter The Correct Name!", "error");
    }

}

var count = 1;

function storeData() {
    if (pakNat.checked) {
        var nation = "Pakistani"
    } else {
        var nation = "Other"
    }
    if (genderMale.checked) {
        var gender = "Male"
    }
    else if (genderFemale.checked) {
        var gender = "Female"
    }
    if (khiCity.checked) {
        var city = "Karachi"
    }
    else if (lhrCity.checked) {
        var city = "Lahore"
    }
    else if (islCity.checked) {
        var city = "Islamabad"
    } else {
        var city = "others"
    }
    if (qualMiddle.checked) {
        var qual = "Middle"
    }
    else if (qualMatric.checked) {
        var qual = "Matric"
    }
    else if (qualInter.checked) {
        var qual = "Inter"
    }
    else if (qualDae.checked) {
        var qual = "DAE"
    }
    else if (qualGrad.checked) {
        var qual = "Graduation"
    }
    else if (qualMaster.checked) {
        var qual = "Masters"
    }
    else if (qualPhd.checked) {
        var qual = "PHD"
    }
    if (courseAib.checked) {
        var course = "Artificial Intelligence & BlockChain"
    }
    else if (courseWam.checked) {
        var course = "Web & Mobile App Development"
    }
    else if (courseCca.checked) {
        var course = "CCA"
    }
    else if (courseCco.checked) {
        var course = "CCO"
    }
    else if (courseGraphic.checked) {
        var course = "Graphic Design & Video Animation"
    }

    // var fullName = nameInput.value

    var obj = {
        name: nameInput.value,
        father: fNameInput.value,
        email: emailInput.value,
        age: ageInput.value,
        gender: gender,
        number: phoneInput.vale,
        nationality: nation,
        cnic: cnicInput.value,
        address: addressInput.value,
        dob: dobInput.value,
        number: phoneInput.value,
        city: city,
        qualification: qual,
        course: course,
        image: picInput.value,
    }

    var a = JSON.parse(localStorage.getItem("data"));
    if (a === null) {
        arr = [];
    }
    else {
        arr = a;
    }
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
}
var obj;
function uncheck() {
    genderFemale.checked = "";
    genderMale.checked = "";
    pakNat.checked = "";
    othNat.checked = "";
    khiCity.checked = "";
    lhrCity.checked = "";
    islCity.checked = "";
    otherCity.checked = "";
    qualMiddle.checked = "";
    qualMatric.checked = "";
    qualInter.checked = "";
    qualDae.checked = "";
    qualGrad.checked = "";
    qualMaster.checked = "";
    qualPhd.checked = "";
    courseAib.checked = "";
    courseWam.checked = "";
    courseCco.checked = "";
    courseCca.checked = "";
    courseGraphic.checked = "";
}