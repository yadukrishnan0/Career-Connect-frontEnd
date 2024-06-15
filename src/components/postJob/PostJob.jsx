import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostjobValidation } from '../../utilities/PostJobYup';

const PostJob = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PostjobValidation}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting }) => (
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

            {/* Tags */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Tags</label>
              <Field
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Job keyword, tags etc"
                name="tags"
              />
              <ErrorMessage name="tags" component="small" className="text-red-400" />
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              disabled={isSubmitting}
            >
              Post Job
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default PostJob;
