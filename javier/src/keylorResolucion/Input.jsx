import { forwardRef } from 'react';

const Input = forwardRef(({ id, type, placeholder }, ref) => {
  return <input id={id} ref={ref} type={type} placeholder={placeholder} />;
});
Input.displayName = 'Input';

export default Input