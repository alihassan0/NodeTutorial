let projects = [
    {title:"ay 7aga", URL:"btngan.com"},
    {title:"asdasd", URL:"btngan.com"},
    {title:"ay 7aga", URL:"btngan.com"},
];

let projectController = {
    getAllProjects:function(req, res){
        res.send(projects);
    },
    createProject:function(req, res){
        let project = req.body;
        projects.push(project);
        res.send("your project " + project.name + " has been added succesfully");
    }
}

module.exports = projectController;