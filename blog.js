let projects = []

function addProject(event) {
    event.preventDefault()

    let projectName = document.getElementById("project_name").value;
    let description = document.getElementById("description").value;
    let imageFile = document.getElementById("button_upload_image");

    imageFile = URL.createObjectURL(imageFile.files[0])
    //imageFile.srcObject = imageFile.files[0]
    let project = {
        projectName,
        description,
        imageFile
    }
   console.table(imageFile);

    projects.push(project)
    loadProjects()
}

function loadProjects() {
   console.log(projects);

    let containerProjects = document.getElementById("big_content")
    window.onload = function(){
    containerProjects.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
        
        containerProjects.innerHTML += `
        <div class="box" id="box_project">
            <div class="image_content">
                 <img src="${projects[i].imageFile}" alt="" id="image_project1">
         </div>
        <h3>${projects[i].projectName}</h3>
        <p>${projects[i].description}</p>
        <div class="container_language_icon">
            <div class="flex_language_icon">
                <div class="language_icon">
                    <img src="assets/images/node_js.png" alt="" id="node_js">
                </div>
                <div class="language_icon">
                    <img src="assets/images/react_js.png" alt="" id="react_js">
                </div>
                <div class="language_icon">
                    <img src="assets/images/vue_js.png" alt="" id="vue_js">
                </div>
                <div class="language_icon">
                    <img src="assets/images/typescript.png" alt="" id="typescript">
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
        </div>        
        </div>`
    }   
}
}




