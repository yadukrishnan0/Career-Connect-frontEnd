import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { PostjobValidation } from '../../utilities/PostJobYup';

const PostJob = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PostjobValidation}
      onSubmit={onSubmit}
      enableReinitialize={true} // Allows initialValues to be updated
    >
      {({ isSubmitting, values }) => (
        <div className="mx-auto p-8 max-w-4xl bg-white rounded-md">
          <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
          <Form>
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Job Title</label>
              <Field
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Add job title, role, vacancies etc"
                name="jobTitle"
              />
              <ErrorMessage name="jobTitle" component="small" className="text-red-400" />
            </div>

           

            {/* Job Role */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Job Role</label>
              <Field
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                name="jobrole"
                placeholder="Job role"
              />
              <ErrorMessage name="jobrole" component="small" className="text-red-400" />
            </div>

            {/* Salary */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Min Salary</label>
                <Field
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Minimum salary"
                  name="minisalary"
                />
                <ErrorMessage name="minisalary" component="small" className="text-red-400" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Max Salary</label>
                <Field
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Maximum salary"
                  name="maxsalary"
                />
                <ErrorMessage name="maxsalary" component="small" className="text-red-400" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Salary Type</label>
                <Field
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Salary type"
                  name="salaryType"
                />
                <ErrorMessage name="salaryType" component="small" className="text-red-400" />
              </div>
            </div>

            {/* Advanced Information */}
            <h2 className="text-xl font-bold mb-4">Advanced Information</h2>
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
                <label className="block text-gray-700 mb-2">Job Type</label>
                <Field
                  as="select"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="jobType"
                >
                  <option value="default" hidden>Select...</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </Field>
                <ErrorMessage name="jobType" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Work-Space-Type</label>
                <Field
                  as="select"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="Works_Space_Type"
                >
                  <option value="" hidden>Select...</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </Field>
                <ErrorMessage name="Works_Space_Type" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Vacancies</label>
                <Field
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Number of vacancies"
                  name="Vacancies"
                />
                <ErrorMessage name="Vacancies" component="small" className="text-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Expiration Date</label>
                <Field
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  name="date"
                />
                <ErrorMessage name="date" component="small" className="text-red-400" />
              </div>
            </div>

            {/* Dynamic Requirements Field */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Requirements</label>
              <FieldArray name="requirements">
                {({ push, remove }) => (
                  <div>
                    {values.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Field
                          name={`requirements.${index}.requirement`}
                          placeholder="Requirement"
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
                          name={`requirements.${index}.requirement`}
                          component="small"
                          className="text-red-400 ml-2"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ requirement: '' })}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Add Requirement
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>



             {/* Dynamic skill Field */}
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
                      onClick={() => push({skill: '' })}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Add Skills
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

 {/* Tags */}
 <div className="mb-4">
              <label className="block text-gray-700 mb-2">Discripation</label>
              <Field
                type="text"
                className="w-full px-3 py-8 border border-gray-300 rounded-md"
                placeholder="Job keyword, tags etc"
                name="tags"
              />
              <ErrorMessage name="tags" component="small" className="text-red-400" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Job'}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default PostJob;
