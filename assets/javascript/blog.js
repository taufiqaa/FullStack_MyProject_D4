let projects = []
let CheckboxIsSelected = [];

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
        return
    }
       
        imageFile = URL.createObjectURL(imageFile.files[0])
        let languagesProject = document.getElementsByClassName("language_field");
        
        CheckboxIsSelected =[];
        for (var i=0; i<languagesProject.length; i++){
            if (languagesProject[i].checked == true) {
                CheckboxIsSelected.push(languagesProject[i].value)
            }
        }
    //imageFile.srcObject = imageFile.files[0]
    let project = {
        projectName,
        description,
        imageFile,
        CheckboxIsSelected,
    };

    console.log(projects)
    projects.push(project)
    loadProjects()
}

function loadProjects() {
    let containerProjects = document.getElementById("big_content")
    let valueInput = CheckboxIsSelected.length

    containerProjects.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {

        containerProjects.innerHTML += `
        <div class="box" id="box_project">
        <div class="image_content">
            <img src="${projects[i].imageFile}" alt="" id="image_project1">
        </div>
        <div id="output_project_name">
            <h3><a href="blog-detail.html">${projects[i].projectName}</a></h3>
        </div>
        <div id="duration">
            <h6>Duration : 3 month(s)</h6>  
        </div>
        <div id="output_description">
            <p>${projects[i].description}</p>
        </div>
        <div class="container_language_icon">
            <div class="flex_language_icon">
                <div class="language_icon">
                ${CheckboxIsSelected[0] ? `<i class="fa-brands fa-node-js fa-2x"></i>`:""}
                </div>
                <div class="language_icon">
                ${CheckboxIsSelected[1] ? `<i class="fa-brands fa-react fa-2x"></i>`:""}
                </div>
                <div class="language_icon">
                ${CheckboxIsSelected[2] ? `<i class="fa-brands fa-vuejs fa-2x"></i>`:""}
                </div>
                <div class="language_icon">
                ${CheckboxIsSelected[3] ? `<i class="fa-brands fa-angular fa-2x"></i>`:""}
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
    </div>`;
        }
    }