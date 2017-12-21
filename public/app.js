
fetch('/api/projects')
  .then(response => response.json())
  .then(addProjects)
  .catch((err) => {
    console.log(err);
  });

function addProjects(projects) {
  projects.forEach((project) => {
    const newProject = `<li>${project.project}</li>`;
    const projectSelect = $('.projects');
    projectSelect.append(newProject);
  });
}
