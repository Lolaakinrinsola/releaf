
const Button = ({ className, light = false, onClick, outline = false,children}) => {
    return (
        <button onClick={onClick} className={`${outline ? " border border-solid border-[#989D9F]" : light ? "bg-white text-black hover:bg-[rgb(176,176,176,0.7)]" : "bg-black text-white hover:bg-[rgba(0,0,0,0.7)]"}  hover:font-bold font-inter h-12 transition-all cursor-pointer duration-500  flex items-center justify-center gap-3 rounded-lg w-full md:w-fit ${className} px-[2em] py-[20px]`} >
            
           {children}
        </button>
    )
}

export default Button