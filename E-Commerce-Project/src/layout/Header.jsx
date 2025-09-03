import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className='py-6 px-4 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    BrandName
                </div>

                <div className='flex items-center gap-6'>
                    <Search className='w-6 h-6' />
                    <ShoppingCart className='w-6 h-6'/>
                    <Menu className='w-6 h-6'/>
                </div>
            </div>
        </header>
    );
};


export default Header;
