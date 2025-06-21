import React,{useState} from 'react';

const Navbar =()=>{
   const [menuOpen,setMenuOpen] = useState(false);
    const navLinks=[
        {name:"Home",href:'#home'},
        {name:"About",href:'#about'},
        {name:"Projects",href:'#projects'},
        {name:"Skills",href:'#skills'},
        {name:"Contact",href:'#contact'},
    ];
    return(
        <nav className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
            <div className='max-w-7xl  mx-auto  px-4 py-3 flex justify-between items-center '>
            {/*LOGO */}
            <h1 className='text-2xl font-bold text-indigo-600'>Rohit.dev</h1>
            {/*Menu */}
            <ul className='hidden md:flex gap-6 text-ray-700font-medium'>
                {navLinks.map((link)  => (
                    <li key={link.name}>
                        <a href={link.href} className='hover:text-indigo-600 transition'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            {/*Mobile Menu Placeholder */}
            <div 
            className='md:hidden text-2xl cursor-pointer'
            onClick={()=> setMenuOpen(!menuOpen) }
            >
                {menuOpen ? '✖' : ' ☰'}
            </div>
            </div>
            {/*Mobile Drop down Menu */}
            {menuOpen && (
                <ul className='md:hidden bg-white px-4 pb-4 pt-2 shadow-lg text-grey-700 font-medium space-y-2 transition-all'>
                    {navLinks.map((link)=>(
                        <li key={link.name} >
                            <a href={link.href} 
                            className='block w-full hover:text-indigo-600'
                        onClick={()=> setMenuOpen(false)}
                        >
                                {link.name}
                        </a>

                        </li>
                    ))}

                </ul>
            )}
        </nav>
    );
};

export default Navbar;
