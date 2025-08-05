import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skill.json";
import history from "../../data/history.json";

// Explicit Image Imports
import cssIcon from "../../assets/skills/css.png";
import figmaIcon from "../../assets/skills/figma.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import reactIcon from "../../assets/skills/react.png";
import nodeIcon from "../../assets/skills/node.png";
import graphqlIcon from "../../assets/skills/graphql.png";

// Explicit History Image Imports
import googleIcon from "../../assets/history/google.png";
import microsoftIcon from "../../assets/history/microsoft.png";
import netflixIcon from "../../assets/history/netflix.png";

// Fallback Image Mapping
const skillImageMap = {
  css: cssIcon,
  react: reactIcon,
  node: nodeIcon,
  figma: figmaIcon,
  html: htmlIcon,
  mongodb: mongodbIcon,
  graphql: graphqlIcon,
};

const historyImageMap = {
  google: googleIcon,
  microsoft: microsoftIcon,
  netflix: netflixIcon,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>

        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const skillKey = skill.title.toLowerCase();
            const skillImage = skillImageMap[skillKey] || "";

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skillImage} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* Work History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const historyImage = historyImageMap[historyItem.organisation.toLowerCase()] || "";

            return (
              <li key={id} className={styles.historyItem}>
                <img src={historyImage} alt={`${historyItem.organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
