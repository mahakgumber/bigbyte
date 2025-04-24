import React from 'react';

const Services = () => {
  return (
    <div className="w-full px-2 w-7xl mx-2">
      {/* Heading */}
      <div className="mt-10">
        <p className="text-3xl font-bold text-[#0a243a] bg-[#c6e2ed] xl:px-8 py-1 xl:mx-3 xs:mx-2 xs:px-2">
          Our services cover all significant industries of eCommerce development, such as
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col xl:flex-row xl:items-center mt-10 gap-6">
        {/* Image */}
        <div className="flex justify-center xl:justify-start">
          <img
            src="./images/Industries/Ecommerce/ecommerce2.png"
            alt="ecommerce"
            className="w-full max-w-[880px] h-auto xs:w-[300px] s:w-[500px] md:w-[700px] lg:w-[950px]"
          />
        </div>

        {/* Services List */}
        <div className="mt-10 xl:mt-0 mb-4">
          <ul className="text-xl s:text-2xl tab:text-3xl font-medium space-y-2">
            <li className="p-2 bg-blue-200 rounded-md">Grocery store app development</li>
            <li className="p-2 bg-blue-50 rounded-md">Restaurants</li>
            <li className="p-2 bg-blue-200 rounded-md">Fashion & Clothing</li>
            <li className="p-2 bg-blue-50 rounded-md">Jewellery store</li>
            <li className="p-2 bg-blue-200 rounded-md">Travel & Tourism</li>
            <li className="p-2 bg-blue-50 rounded-md">Online booking</li>
            <li className="p-2 bg-blue-200 rounded-md">Medical & Pharmacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
