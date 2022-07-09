import React, { useState } from "react";

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Run Buddy',
            type: 'Webpage',
            appLink: '',
            github: ''
        },
        {
            name: 'Photo Port',
            type: 'React App',
            appLink: '',
            github: ''
        },
        {
            name: 'Note taker',
            type: 'NodeJS App',
            appLink: '',
            github: ''
        },
        {
            name: 'README Generator',
            type: 'NodeJS App',
            appLink: '',
            github: ''
        },
        {
            name: 'Team Profile Generator',
            type: 'NodeJS App',
            appLink: '',
            github: ''
        },
        {
            name: 'R.E.L.A.X',
            type: 'Webpage',
            appLink: '',
            github: ''
        }
    ])
    return(
        <section className="portfolio">
        {projects.map((project,i) => (
        <image>
        <img
        className="project-img"
        src={require(`../../assets/images/${i}.png`)}
        alt={project.name}
        onClick={() => console.log(project.name)}
        key={project.name}
        />
        <h4 className="project-text">
        {project.name} 
        <br/> 
        <br/>
        {project.type}
        </h4>
        
        </image>
        
       
        
        ))}
        
        </section>
    )
};

export default Portfolio;