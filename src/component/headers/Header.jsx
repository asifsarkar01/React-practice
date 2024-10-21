import profile from '../../images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between w-11/12 mx-auto items-center p-2 border-b-2'>
            <h1 className="text-3xl font-bold">Knowledge Cafe-Here</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;