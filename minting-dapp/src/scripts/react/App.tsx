import { Suspense, useState } from "react";
import Header from "./Header";
import MintPage from "./MintPage";
import ThreeScene from "./ThreeScene";
 
function App() {
  const [showPage, setShowPage] = useState(false);

  // const togglePage = React.useCallback(() => setShowPage(!showPage), [setShowPage]);
  function togglePage() {
    setShowPage(!showPage);
  };

  return (
    <>
      <div className="app">
        <Header togglePage={togglePage} />
        {showPage && <div className="backdrop" onClick={togglePage}></div>}
        <MintPage togglePage={togglePage} showPage={showPage} />
      </div>
      <ThreeScene togglePage={togglePage} />
    </>
  );
};

export default App;

