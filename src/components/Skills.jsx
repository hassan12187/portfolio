import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
      <section className="skills_section">
    <div className="gap"></div>
        <div className="background_box"></div>
      <div className="content container text-center py-4">
        <h1>SKILLS</h1>
        <div className="cards row justify-content-center gap-5">
          <SkillsCard
            title={"Back-end developer"}
            desc={
              "Develop business logic and back-end system to support the product, create API, have vast experience with version control systems."
            }
            img={'/merge.png'}
            i={1}
          >
            <li>
              <span>Languages:</span>
            </li>
            <li>PHP,Python,ASP.NET Core,Nodejs/Expressjs</li>
            <li>
              <span>My Tools:</span>
            </li>
            <li>MySql</li>
            <li>Sql</li>
            <li>MongoDb</li>
          </SkillsCard>
          <SkillsCard
            title={"Front-end developer"}
            desc={
              "I code things from scratch, and gracefully bring the ideas to life and to the bowser, paying maximal attention to your vision of the product.  "
            }
            img={'/as.png'}
            i={2}
          >
            <li>
              <span>Technologies Stack:</span>
            </li>
            <li>HTML,JavaScript,CSS</li>
            <li>
              <span>My Tools:</span>
            </li>
            <li>Bootstrap</li>
            <li>AJAX</li>
            <li>ReactJS</li>
            <li>GitHub</li>
          </SkillsCard>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
