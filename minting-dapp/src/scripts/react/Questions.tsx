import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AccordionLayout from "./AccordionLayout";



export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="accordion">
      <AccordionLayout 
        title="What are tarot cards?"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        In the simplest terms, tarot cards are used for fortune-telling to gain insight on one's situation. 
        Each card usually has an underlying meaning, traditionally depicted by the symbolisms on the card's illustration. 
        Tarot cards have a nearly 600 year history. 
        The most known deck is the Rider tarot deck comprised of 78 cards, with 22 <strong>trumps</strong> and 56 <strong>suit cards</strong>. 
        Many variations exist today. See <a href='https://www.britannica.com/topic/tarot' target='_blank'>this detailed explanation <div className="icons text-sm"><FaExternalLinkAlt /></div></a>.
      </AccordionLayout>

      <AccordionLayout 
        title="How is this collection organized?"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        This collection is based off of the Rider tarot deck. If you are unfamiliar, <span className="accordion-href" onClick={() => setActiveIndex(1)}>click here</span>. 
        580 NFTs are divided into 6 variations of the whole 78-card deck, and 2 variations of the suits, or minor arcana.
      </AccordionLayout>

      <AccordionLayout 
        title="What are the NFT dimensions?"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Our collection is in PNG format 2560px by 2560px, all hand-drawn. Time and effort was put into them <span className="emoji">😤</span>!
      </AccordionLayout>

      <AccordionLayout 
        title="What about future plans?"
        index={4}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        We plan to release variations of tarot decks! Contact us if you'd like to put your deck out! We'd like to build a common 
        space for divination and web3 enthusiasts, and your art would be greatly appreciated <span className="emoji">😝</span>! 
        The idea is to give free guidance in a community setting, for you to release your own fun, hand-drawn deck. 
      </AccordionLayout>

    </div>
  )
};