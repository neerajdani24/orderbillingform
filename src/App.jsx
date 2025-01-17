import React, { useState, useEffect } from 'react';

const OrderBillingForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    status: 'Pending',
    tracking: `TRACK-${Date.now()}`,
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    county: ''
  });

  const [errors, setErrors] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply dark mode on body tag when isDarkMode is true
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'firstName' || name === 'lastName') {
      setFormData((prev) => ({
        ...prev,
        fullName: `${prev.firstName} ${prev.lastName}`
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip || formData.zip.length !== 6) {
      newErrors.zip = 'Zip Code must be 6 digits';
    }
    if (!formData.county) newErrors.county = 'County is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-300 dark:bg-white-700 text-gray-900 dark:text-gr p-2 rounded-full shadow-md"
        >
          {isDarkMode ? 'Light Mode' : 'Nigga Mode'}
        </button>
      </div>
      <form
        className={`max-w-4xl mx-auto p-6 ${
          isDarkMode ? 'bg-white-800' : 'bg-white'
        } shadow-md rounded-lg w-full`}
        onSubmit={handleSubmit}
      >
        <h2
          className={`text-xl font-semibold mb-4 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          Order Billing
        </h2>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.fullName}
              readOnly
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Status
            </label>
            <input
              type="text"
              name="status"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.status}
              readOnly
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Tracking Number
            </label>
            <input
              type="text"
              name="tracking"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.tracking}
              readOnly
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Address *
            </label>
            <input
              type="text"
              name="address"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              City *
            </label>
            <input
              type="text"
              name="city"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              State *
            </label>
            <input
              type="text"
              name="state"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Zip Code *
            </label>
            <input
              type="text"
              name="zip"
              maxLength="6"
               pattern="[0-9]*"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip}</p>
            )}
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              County *
            </label>
            <input
              type="text"
              name="county"
              className={`w-full mt-1 p-2 border ${
                isDarkMode
                  ? 'border-gray-600 dark:bg-gray-700 dark:text-white'
                  : 'border-gray-300 bg-white text-black'
              } rounded-md`}
              value={formData.county}
              onChange={handleChange}
            />
            {errors.county && (
              <p className="text-red-500 text-sm">{errors.county}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg--700 dark:hover:bg-blue-800"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderBillingForm;
