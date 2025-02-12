import "../styles/Skills.css"
import {motion} from "framer-motion";
import {skillsList} from "../constants/Skills"
import {animationSet} from "../constants/AnimationSet"
export const Skills: React.FC = () => {

    return (
        <div className="skills-page">
        <section className="skills-card">
            <h2>Навыки</h2>
            <ul className="list-of-skills">
                {skillsList.map((skill, index) => (
                    <motion.li
                        key={skill}
                        className="skills-card-item"
                        initial={animationSet.initial}
                        animate={animationSet.animate}
                        transition={{...animationSet.transition, delay: index * animationSet.delayMultiplier}}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    </div>
);
};

