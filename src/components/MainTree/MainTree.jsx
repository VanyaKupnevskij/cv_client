import styles from "./MainTree.module.scss";

import img_skills from '../../images/Skills.svg';
import img_projects from '../../images/Projects.svg';
import img_contacts from '../../images/Contacts.svg';
import img_hobbies from '../../images/Hobbies.svg';
import img_timeline from '../../images/Timeline.svg';

function MainTree() {
  return (
    <div className={styles.root}>
      <ul className={styles.tree}>
        <li className={styles.node_main}>Vanya</li>
        <li className={styles.node_child}>
          <img src={img_hobbies} alt="hobbies"/>
        </li>
        <li className={styles.node_child}>
          <img src={img_contacts} alt="contacts"/>
        </li>
        <li className={styles.node_child}>
          <img src={img_skills} alt="skills"/>
        </li>
        <li className={styles.node_child}>
          <img src={img_projects} alt="projects"/>
        </li>
        <li className={styles.node_child}>
          <img src={img_timeline} alt="timeline"/>
        </li>
      </ul>
    </div>
  );
}

export default MainTree;
