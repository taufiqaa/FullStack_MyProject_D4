let projects = []

function addProject(event) {
    event.preventDefault()

    let projectName = document.getElementById("project_name").value;
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;
    let description = document.getElementById("description").value;
    let imageFile = document.getElementById("upload_image_button");

    if(!projectName && !startDate &&!endDate && !description){
        alert("All fields are required");
    }else if(!projectName){
        alert("Project Name is required");
    }else if(!startDate){
        alert("Start Date is required");
    }else if(!endDate){
        alert("End Date is required");
    }else if(!description){
        alert("Description is required");
    }
    
        imageFile = URL.createObjectURL(imageFile.files[0])
        let duration = timeDuration(new Date(startDate), new Date(endDate));
        let languages = checkboxIsSelected(); 
    //imageFile.srcObject = imageFile.files[0]
    let project = {
        projectName,
        description,
        imageFile,
        duration,
        languages,
    }
   console.table(imageFile);

    projects.push(project)
    loadProjects()
}

function timeDuration(startDate,endDate){
    let durationResult = startDate.getMonth() - endDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear());

    return Math.abs(durationResult);
}

function checkboxIsSelected(){
    let checkboxActivated = document.querySelectorAll(".language_checkbox input[type='checkbox']:checked");

    let addCheckbox = []
    
    for(let i=0; i<checkboxActivated.length; i++){
        addCheckbox.push(checkboxActivated[i].value);
    }
    return addCheckbox;
}

function loadProjects() {
   console.log(projects);
    let containerProjects = document.getElementById("big_content")
    
    containerProjects.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
       let languageType = projects[i].languages;
        containerProjects.innerHTML += `
    <div class="box" id="box_project">
        <div class="image_content">
            <img src="${projects[i].imageFile}" alt="" id="image_project1">
        </div>
        <div id="output_project_name">
            <h3>${projects[i].projectName}</h3>
        </div>
        <div id="duration">
            <h6>Duration : ${projects[i].duration} month(s)</h6>  
        </div>
        <div id="output_description">
            <p>${projects[i].description}</p>
        </div>
        <div class="container_language_icon">
            <div class="flex_language_icon">
                <div class="language_icon">
                ${language_1.checked? `<img src="assets/images/node_js.png" alt="" id="node_js">`:""}
                </div>
                <div class="language_icon">
                ${language_2.checked? `<img src="assets/images/react_js.png" alt="" id="react_js">`:""}
                </div>
                <div class="language_icon">
                ${language_3.checked? `<img src="assets/images/vue_js.png" alt="" id="vue_js">`:""}
                </div>
                <div class="language_icon">
                ${language_4.checked? `<img src="assets/images/typescript.png" alt="" id="typescript">`:""}
                </div>
            </div>
        </div>
        <div class="container_content_button">
            <div class="left_content_button">
                <button id="edit_content_button">Edit</button>
            </div>
            <div class="right_content_button">
                <button id="delete_content_button">Delete</button>
            </div>
        </div>
    </div>`
        }
    }