import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {


    return (
        <div>
            <Title>Projects</Title>
        <div className="flex flex-col md:flex-row items-center justify-center ">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio?.map(project => (
                    <PortfolioItem
                    imgURL={project.imgURL}
                    imgALT={project.imgALT}
                    title={project.title}
                    slug={project.slug}
                    stack={project.stack}
                    demoURL={project.demoURL}
                    gitURL={project.gitURL}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}

export default Portfolio;