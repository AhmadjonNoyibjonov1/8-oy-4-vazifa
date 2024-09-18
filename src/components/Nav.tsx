import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  businessAddress: string;
  type: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
}

const validationSchema = Yup.object({
  businessAddress: Yup.string().required('Business address is required'),
  type: Yup.string().required('Type of business is required'),
  address1: Yup.string().required('Address line 1 is required'),
  city: Yup.string().required('City is required'),
  zip: Yup.string().required('Zip code is required'),
});

const BusinessForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      businessAddress: '',
      type: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white shadow-md w-[410px] mx-auto">
      <div className="mb-4">
        <label htmlFor="businessAddress" className="block text-sm font-medium">
          Business address
        </label>
        <select
          id="businessAddress"
          name="businessAddress"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border"
        >
          <option value="">Registered business address</option>
          <option value="address1">Address 1</option>
          <option value="address2">Address 2</option>
        </select>
        {formik.touched.businessAddress && formik.errors.businessAddress ? (
          <p className="text-red-500 text-sm">{formik.errors.businessAddress}</p>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium">
          Type
        </label>
        <select
          id="type"
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border"
        >
          <option value="">Type of business</option>
          <option value="LLC">LLC</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
        </select>
        {formik.touched.type && formik.errors.type ? (
          <p className="text-red-500 text-sm">{formik.errors.type}</p>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="address1" className="block text-sm font-medium">
          Address
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          value={formik.values.address1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border"
        />
        {formik.touched.address1 && formik.errors.address1 ? (
          <p className="text-red-500 text-sm">{formik.errors.address1}</p>
        ) : null}
      </div>

      <div className="mb-4">
        <input
          id="address2"
          name="address2"
          type="text"
          value={formik.values.address2}
          onChange={formik.handleChange}
          className="mt-1 block w-full p-2 border"
          placeholder="Address line 2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium">
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border"
        />
        {formik.touched.city && formik.errors.city ? (
          <p className="text-red-500 text-sm">{formik.errors.city}</p>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="zip" className="block text-sm font-medium">
          Zip
        </label>
        <input
          id="zip"
          name="zip"
          type="text"
          value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full p-2 border"
        />
        {formik.touched.zip && formik.errors.zip ? (
          <p className="text-red-500 text-sm">{formik.errors.zip}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Continue →
      </button>
    </form>
  );
};

export default BusinessForm;
