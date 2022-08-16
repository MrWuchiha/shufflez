import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }: {title: string, children: any, index: number, activeIndex: number, setActiveIndex:any}) => {
  
  function handleSetIndex(index:number) {
    if (activeIndex === index) {setActiveIndex(0);};
    (activeIndex !== index) && setActiveIndex(index);
  };

  return (
    <>
      <div onClick={() => handleSetIndex(index)}>
          <button className='accordion-expand-button'>
              {title}
            <div className='accordion-icon'>
              {
              (activeIndex === index) 
              ? <div className='icons'><FaCaretUp /></div>
              : <div className='icons'><FaCaretDown /></div>
              }
            </div>
          </button>
      </div>

      {(activeIndex === index) && (
          <div className="accordion-content">
            {children}
          </div>
      )}
    </>
  );
};

export default AccordionLayout;