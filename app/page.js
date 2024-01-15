import Footer from "./(components)/footer/Footer";
import AssignmentSelector from "./(components)/landingPage/assignmentSelector";
import FirstSection from "./(components)/landingPage/firstSection";
import NavBar from "./(components)/navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="contentWrapper">
        <div className="firstSection">
          <div className="contentHeader">
            <FirstSection/>
          </div>
          <img src="/man_typing.webp" width={"75%"} style={{position:"relative", bottom:"30vh", left:"80vh"}}/>
        </div>
        <AssignmentSelector/>
        {/* <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div>
        <div style={{border:"1px solid black", height:"300px", width:"100%"}}></div> */}
      </div>
      <Footer/>
    </>

  )
}
