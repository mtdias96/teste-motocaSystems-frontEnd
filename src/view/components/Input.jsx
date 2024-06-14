import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { cn } from '../../app/utils/cn';

export const Input = forwardRef(({label, name, className, ...props }, ref) => {
  return (
    <div className="flex items-center justify-center bg-transparent w-full">
      <label className="relative">
        <input
          {...props}
          name={name}
          ref={ref}
          className={cn("px-4 py-3 text-[13px] font-medium outline-none border border-customGray rounded peer bg-inherit  text-white w-[409px]", className)}
          required
        />
        <span className={cn("absolute left-0 top-3 px-[15px] ml-2 text-[13px] font-medium leading-[19.5px] pointer-events-none -translate-y-5 bg-purple text-white1 ", className)}>
          {label}
        </span>
      </label>
    </div>
  );
});

Input.displayName = 'Input';
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,

};

export default Input;
