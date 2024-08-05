import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ name, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item bg-lightbox rounded-xl p-4">
      <div
        className="accordion-header cursor-pointer flex items-center justify-between font-medium duration-200 ease-out text-xl"
        onClick={toggleAccordion}
      >
        {name}
        <span
          className={`accordion-icon inline-block duration-700 ease-in ${isActive ? 'rotate-180' : 'rotate-0'}`}
        >
          <FaChevronDown className="accordion-icon" />
        </span>
      </div>
      <div
        className={`accordion-content bg-gray-100 overflow-hidden duration-500 ease-out ${isActive ? 'h-auto' : 'h-0'}`}
      >
        <div className="p-3 text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;