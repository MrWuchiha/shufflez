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
          <u><strong>Smart contract:</strong></u> https://etherscan.io <br/>
          <strong>Everything is hand-drawn!</strong> <br/>
        </p>

        <p>
          <h2>About Us</h2>
          Shufflez is a newly established project from Montreal, Canada. For the foreseeable future, we plan to bring divination and tarot cards to the web3 space in the form of NFTs. 
          To accelerate our project, give us a follow on Twitter and join our Discord. 
        </p>

        <p className="socials-info">
        <span className="emoji">🌹 </span><strong><a href='https://www.instagram.com/shufflez.nft/' target='_blank'>Instagram</a></strong>, for NFT previews. <br/>
          Join the community on <strong><a href='https://discord.gg/9xbSmaecKw' target='_blank'>Discord</a></strong><span className="emoji"> 🔮</span>! <br/>
          If you like us, give us a follow on <strong><a href='https://twitter.com/ShufflezNft' target='_blank'>Twitter</a></strong><span className="emoji"> ✨</span>! <br/>
          We are also available on <strong><a href='https://www.tiktok.com/@shufflez.nft' target='_blank'>Tiktok</a></strong><span className="emoji"> ❤️‍🔥</span>. <br/>
        </p>

        <p>
          <h2>Why should NFT communities be exclusive?</h2>
          Shufflez is all about inclusivity 🙌! You don't have to own a Shufflez NFT to join the community. Instead, we will encourage you 
          to create your own tarot-themed NFT! 
        </p>

        <p>
          <strong className="italic">"Then why should you own a Shufflez NFT?"</strong> <br/>
          We want to cater a fun community where artists, developers, and diviners alike 
          can share their passion for gems, astrology, and tarot cards, in the form of NFTs!
        </p>

        <p>
          <strong className="italic text-primary">We do not want to become a plutocratic-like DAO.</strong>
        </p>

        <p>
          Instead, we bring to you a space filled with genuine passion 🖤!
          You will be able to sell and buy your own neat tarot-themed NFT to an already existing audience, and
          by owning a Shufflez NFT, you will contribute in keeping the project running, and accelerating its development. 
          We are eternally grateful for your support!
        </p>

        <h2>FAQ <span className="emoji">🤔</span></h2>
        <Questions />
      </div>
    </>
  )
};

export default Info;