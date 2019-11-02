import React, { useState } from 'react';
import { faTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };

  return (
    <>
      <span className="sidebar__dot">·</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span className="sidebar__project-delete" onClick={() => setShowConfirm(!showConfirm)}>
        <FaTrashAlt />
        {showConfirm && <div className="project-delete-modal"></div>}
      </span>
    </>
  );
};
