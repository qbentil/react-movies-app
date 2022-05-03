import {BsGithub} from 'react-icons/bs'
const Navbar = () => {
    return(
        <div className="w-full bg-gray-800 h-16 flex  justify-around items-center ">
            <h1 className="text-white font-bold text-xl">Movies<span className="text-blue-900"> App</span></h1>
            <div>
                <BsGithub color='#fff' size={26} />
            </div>
        </div>
    )
}

export default Navbar