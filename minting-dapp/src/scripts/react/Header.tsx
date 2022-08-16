import { FaBars, FaInstagram, FaDiscord, FaTwitter, FaTiktok } from 'react-icons/fa';


{/* <a href={} target="_blank"></a> */}

export default function Header(props:any) {
    return (
        <>
            <div className='header'>
                <div className='shufflez-title'>SHUFFLEZ NFT</div>
                <div className='header-content'>
                    <a href='https://discord.gg/9xbSmaecKw' target='_blank'><FaDiscord className='hover:text-blue-600 active:text-blue-800 focus:outline-none focus:ring focus:ring-blue-300' /></a>
                    <a href='https://www.tiktok.com/@shufflez.nft' target='_blank'><FaTiktok className='hover:text-gray-600 active:text-gray-800 focus:outline-none focus:ring focus:ring-gray-400' /></a>
                    <a href='https://www.instagram.com/shufflez.nft/' target='_blank'><FaInstagram className='hover:text-red-500 active:text-red-600 focus:outline-none focus:ring focus:ring-red-200' /></a>
                    <a href='https://twitter.com/ShufflezNft' target='_blank'><FaTwitter className='hover:text-sky-400 active:text-sky-600 focus:outline-none focus:ring focus:ring-sky-100' /></a>
                    <FaBars onClick={props.togglePage} className='hover:text-stone-600 active:text-stone-900 focus:outline-none focus:ring focus:ring-stone-400' />
                </div>
            </div>
        </>
    );
}

// export default function Header() {
//     const showPage = usePageContext();
//     const togglePage = usePageContextUpdate();

//     return (
//         <>
//             <div className='header'>
//                 <div className='shufflez-title'>SHUFFLEZ</div>
//                 <div className='header-content'>
//                     <FaDiscord className='hover:text-blue-600 active:text-blue-800 focus:outline-none focus:ring focus:ring-blue-300' />
//                     <FaInstagram className='hover:text-red-500 active:text-red-600 focus:outline-none focus:ring focus:ring-red-200' />
//                     <FaBars onClick={togglePage} className='hover:text-stone-600 active:text-stone-900 focus:outline-none focus:ring focus:ring-stone-400' />
//                 </div>
//             </div>
//             {showPage && <div className="backdrop" onClick={togglePage}></div>}
//         </>
//     );
// }
