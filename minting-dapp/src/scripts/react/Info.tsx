import { FaExternalLinkAlt } from "react-icons/fa";
import Questions from "./Questions";

const Info = () => {
  return (
    <>
      <div className="general-info-text">
        <p>
          <h2>Key Information</h2>
          <u><strong>Release date:</strong></u> August 29th 10am EST <br/>
          <u><strong>Total number of tokens:</strong></u> 580 <br/>
          <u><strong>Price per token:</strong></u> 0.06 ETH <br/>
          <u><strong>Reveal type:</strong></u> Delayed ~ 1 week. <br/>
          <u><strong>Royalty fees:</strong></u> None <br/>
          <u><strong>Other information:</strong></u> ERC721 token on Ethereum <br/>
          <u><strong>Smart contract:</strong></u> <a href='https://etherscan.io/address/0x6be20890784d0ca1c442c13a2c86992c0838be5a#code' target='_blank'>Follow link <div className="icons text-sm"><FaExternalLinkAlt /></div></a> <br/>
          <strong>Everything is hand-drawn!</strong> <br/>
        </p>

        <p>
          <h2>About Us</h2>
          Shufflez is a newly established project from <strong className="text-highlight">Montreal, Canada</strong>. For the foreseeable future, we plan to bring divination and tarot cards to the web3 space in the form of NFTs. 
          To accelerate our project, give us a follow on Twitter and join our Discord. 
        </p>

        <p className="socials-info">
        <span className="emoji">💦 </span><strong><a href='https://www.instagram.com/shufflez.nft/' target='_blank'>Instagram</a></strong>, for NFT previews. <br/>
          Learn more about tarots on our <strong><a href='https://discord.gg/9xbSmaecKw' target='_blank'>Discord</a></strong>!<span className="emoji"> 🔮</span> <br/>
          Join the community on <strong><a href='https://twitter.com/ShufflezNft' target='_blank'>Twitter</a></strong>.<span className="emoji"> ✨</span> <br/>
          We are also available on <strong><a href='https://www.tiktok.com/@shufflez.nft' target='_blank'>Tiktok</a></strong>. <span className="emoji"> ❤️‍🔥</span> <br/>
        </p>

        <p>
          <h2>Project Plan</h2>
          We want to cater a <strong className="text-highlight">fun</strong> community where artists, developers, and diviners alike 
          can share their passion for <strong className="text-highlight">gems</strong>, <strong className="text-highlight">astrology</strong>, 
          and <strong className="text-highlight">tarot cards</strong>, in the form of <strong className="text-highlight">NFTs</strong>! <br/>
          We'd like to build a common space for divination and web3 enthusiasts to <strong className="text-highlight">discuss</strong> 
          and <strong className="text-highlight">share ideas</strong> for tarot decks.
        </p>

        <p>
          Once accomplished, we ambitiously hope to put the NFTs to use in the metaverse. <strong className="text-highlight">Imagine tarot reading in the metaverse</strong>! 💎
        </p>

        <p>
          <h2>Why should NFT communities be exclusive?</h2>
          Shufflez is all about <strong className="text-highlight">inclusivity</strong>! 🙌 You don't have to own a Shufflez NFT to join the community. Instead, we will encourage you 
          to create your own tarot-themed NFT! 
        </p>

        <p>
          <strong className="italic text-center content-center">"Then why should I own a Shufflez NFT?"</strong>
        </p>

        <p>
          Collect a full-on 78 card deck and we will send you a <strong className="text-highlight">printed copy</strong> in <strong className="text-highlight">real life</strong>! 😱 <br/>

          In addition, join the community to buy and sell exclusive, hand-drawn, tarot-themed NFTs! The community will be already 
          established.
        </p>

        <p>  
          <strong className="text-highlight">We are truly grateful for your support. Even just for reading our website</strong>. 🙏
          By owning a Shufflez NFT, you will contribute in keeping the project running, accelerating its development, and providing joy in the niche! 
        </p>

        <h2>FAQ and Info <span className="emoji">🤔</span></h2>
        <Questions />
      </div>
    </>
  )
};

export default Info;