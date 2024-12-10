
 export default  function Button  ({ children, variant = 'primary', className = '', ...props })  {
    const baseStyles = "px-6 py-4 rounded-full font-medium transition-all duration-300";
    const variants = {
      primary: "bg-primary-gradient text-white",
      secondary: " text-[#6B5B95]  hover:bg-gray-50 border-2 border-[blue-custom-700]"
    };
    
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };