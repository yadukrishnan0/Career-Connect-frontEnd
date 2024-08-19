import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { ApplicationValidation } from '../../utilities/PostJobYup';

const ApplicationForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ApplicationValidation}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <div className="mx-auto p-8 max-w-4xl bg-white rounded-md">
          <h1 className="text-2xl font-bold mb-6"></h1>
          <Form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Education</label>
                <Field
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="education"
                  placeholder="Education"
                />
                <ErrorMessage name="education" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Experience</label>
                <Field
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="experience"
                  placeholder="Experience"
                />
                <ErrorMessage name="experience" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Company</label>
                <Field
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Company"
                  name="company"
                />
                <ErrorMessage name="company" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Location</label>
                <Field
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Location"
                  name="location"
                />
                <ErrorMessage name="location" component="small" className="text-red-400" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Skill</label>
              <FieldArray name="skill">
                {({ push, remove }) => (
                  <div>
                    {values.skill.map((skill, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Field
                          name={`skill.${index}.skill`}
                          placeholder="skills"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="ml-2 px-2 py-1 text-white bg-red-500 rounded"
                        >
                          Remove
                        </button>
                        <ErrorMessage
                          name={`skill.${index}.skill`}
                          component="small"
                          className="text-red-400 ml-2"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ skill: '' })}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Add Skills
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Language</label>
              <FieldArray name="language">
                {({ push, remove }) => (
                  <div>
                    {values.language.map((language, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Field
                          name={`language.${index}.language`}
                          placeholder="language"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="ml-2 px-2 py-1 text-white bg-red-500 rounded"
                        >
                          Remove
                        </button>
                        <ErrorMessage
                          name={`language.${index}.language`}
                          component="small"
                          className="text-red-400 ml-2"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ language: '' })}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Add Languages
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Resume (PDF only)</label>
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files[0]);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage name="resume" component="small" className="text-red-400" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'submiting...' : 'Submit'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ApplicationForm;
