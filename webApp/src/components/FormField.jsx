const FormField = ({ label, helperText, children }) => {
  return (
    <div className="flex flex-col mt-2 relative">
      <div className="flex flex-row justify-between items-center">
        <label className="font-semibold opacity-90">{label}</label>
        {helperText && (
          <p className="text-xs font-medium text-gray-400">{helperText}</p>
        )}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default FormField;
