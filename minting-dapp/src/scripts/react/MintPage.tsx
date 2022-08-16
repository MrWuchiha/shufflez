import Dapp from "./Dapp";
import Info from "./Info";

export default function MintPage(props:any) {
  let pageClasses = props.showPage ? "side-drawer open" : "side-drawer";

  return (
    <div className={pageClasses}>
      <div className="mint-container">
        <button onClick={props.togglePage}>Back</button>
        {/* <img src={"/build/images/mint.png"} alt="Preview!" /> */}
        <div className="mint-title">MINT</div>
        <Dapp />
        <Info />
      </div>
    </div>
  )
}