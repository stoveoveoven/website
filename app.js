function loadProjects(type){
    console.log(type);
    document.getElementById('filter__all').style.color = 'grey';
    document.getElementById('filter__academic').style.color = 'grey';
    document.getElementById('filter__personal').style.color = 'grey';
    switch(type){
        case 'all':
			renderProjects(all);
            document.getElementById('filter__all').style.color = 'black';
			break;
        case 'academic':
            renderProjects(academic);
            document.getElementById('filter__academic').style.color = 'black';
            break;
        case 'personal':
            renderProjects(personal);
            document.getElementById('filter__personal').style.color = 'black';
            break;
    }

}

function renderProjects(projects) {
    console.log(document.getElementById('projects__js').innerHTML);
    document.getElementById('projects__js').innerHTML = projects;
}

// default load all projects
loadProjects('all');

