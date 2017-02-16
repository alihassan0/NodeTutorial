let Project = require('../models/Project');

let projectController = {
    
    getAllProjects:function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('index', {projects});
        })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    }
}

module.exports = projectController;