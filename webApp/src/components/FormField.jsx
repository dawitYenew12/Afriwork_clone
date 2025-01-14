const FormField = ({ label, children }) => {
    return (
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="jobSite" className="font-semibold opacity-90">
          {label}
        </label>
        <div className="mt-2">{children}</div>
      </div>
    );
  };
  

export default FormField;
