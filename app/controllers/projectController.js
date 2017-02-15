let Project = require('../models/Project');

let projectController = {
    
    getAllProjects:function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.send(projects);
        })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err)
                res.send(err.message)
            else
                res.send("your project " + project.title + " has been added succesfully");
        })
    }
}

module.exports = projectController;