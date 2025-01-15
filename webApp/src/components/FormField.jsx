const FormField = ({
  label,
  helperText,
  children,
  iconLeft,
  iconRight,
  onDateInputClick,
}) => {
  return (
    <div className="flex flex-col mt-2 relative">
      <div className="flex flex-row justify-between items-center">
        <label className="font-semibold opacity-90">{label}</label>
        {helperText && (
          <p className="text-xs font-medium text-gray-400">{helperText}</p>
        )}
      </div>
      <div className="mt-2" onClick={onDateInputClick}>
        {iconLeft && (
          <div className="w-12 h-12 absolute top-11 left-2">{iconLeft}</div>
        )}
        {children}
        {iconRight && (
          <div className="absolute top-11 right-3">{iconRight}</div>
        )}
      </div>
    </div>
  );
};

export default FormField;
