import Footer from "../(components)/footer/Footer";
import NavBar from "../(components)/navBar/NavBar";

export default function Reviews() {
  return (
    <>
      <NavBar/>
      <div className="contentWrapper" style={{border:"1px solid black"}}>
        <h1>Reviews Page</h1>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
      </div>
      <Footer/>
    </>
  )
}
