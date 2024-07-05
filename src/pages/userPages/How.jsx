import React, { useState } from 'react';

const How = () => {
  const [skills, setSkills] = useState([{skill:'mongo'},{skill:'sql'}]);
  const [experiences, setExperiences] = useState([{ company: 'levelx', role: 'MERN STACK DEVELOPER' }]);
  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState({ company: '', role: '' });

  const addSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill('');
  };

  const addExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({ company: '', role: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add new skill"
            className="border p-2 rounded-l-lg"
          />
          <button onClick={addSkill} className="bg-blue-500 text-white p-2 rounded-r-lg">
            Add Skill
          </button>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="list-disc ml-5 mt-2">
          {experiences.map((exp, index) => (
            <li key={index}>
              <strong>{exp.company}</strong> - {exp.role}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            value={newExperience.company}
            onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            placeholder="Company"
            className="border p-2 rounded-l-lg mr-2"
          />
          <input
            type="text"
            value={newExperience.role}
            onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
            placeholder="Role"
            className="border p-2 rounded-r-lg"
          />
          <button onClick={addExperience} className="bg-blue-500 text-white p-2 rounded mt-2">
            Add Experience
          </button>
        </div>
      </section>
    </div>
  );
};

export default How;
