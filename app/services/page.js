import Footer from "../(components)/footer/Footer";
import NavBar from "../(components)/navBar/NavBar";

export default function Services() {
  return (
    <>
      <NavBar/>
      <div className="contentWrapper" style={{border:"1px solid black"}}>
        <h1>Services Page</h1>
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
