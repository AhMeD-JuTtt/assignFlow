import Link from "next/link";
import UpArrowBtn from "./UpArrowBtn";

export default function Footer() {
  return (
    <div className="footer">
        <div className="btnUpArrowDiv">
            <UpArrowBtn/>
        </div>
        <div className="footerItemsSection">
            <div className="footerItems">
                <h2>Info</h2>
                <ul>
                    <li>Contact Us</li>
                    <li>Pricing</li>
                    <li>Out writers</li>
                    <li>Guarantee</li>
                    <li>FAQ</li>
                    <li>Progressive delivery</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footerItems">
                <h2>Tools</h2>
                <ul>
                    <li>Free inquiry</li>
                </ul>
            </div>
            <div className="footerItems">
                <h2>Terms</h2>
                <ul>
                    <li>Terms and Conditions</li>
                    <li>Money back Guarantee</li>
                    <li>Privacy policy</li>
                    <li>Plagiarism-free guarantee</li>
                </ul>
            </div>
            <div className="footerItems">
                <h2 className="footerHeadingHidden">Info</h2>
                <ul>
                    <li>Guarantee</li>
                    <li>Revision policy</li>
                    <li>Cookie policy</li>
                    <li>Social responsibilty policy</li>
                </ul>
            </div>
        </div>
        <hr color="#4C4C4C" style={{marginTop:"20vh"}}/>
        <div className="footerSection2">
            <div className="footerDisclaimAndAddr">
                <div className="footerDisclaimer">
                    <h2>Disclaimer</h2>
                    <p>Writera Ltd: Expert assignment solutions. We offer a range of assignments with 
                        diverse intricacy levels and
                        tailored writing support services. 
                        Additionally, we provide research 
                        resources solely for citation purposes. 
                        Any materials or services acquired from 
                        our website must be appropriately cited.</p>
                </div>
                <div className="footerAddress">
                    <h2>Writera Limited:</h2>
                    <p>Vasili Michalidi, 9, 3026, Limassol, Cyprus.</p>
                    <p>@2014-2023 DoMyAssignments.com</p>
                </div>
            </div>
            <div className="footerPayMethsAndLangs">
                <div className="footerPayMethsAndLangs2">
                    <h2>We accept</h2>
                    <img src="/payments.svg"/>
                </div>
                <div className="footerPayMethsAndLangs2">
                    <h2>Language</h2>
                    <div className="langImgs">
                        <Link href={"#"}>
                            <img src="/lang1.svg"/>
                        </Link>
                        <Link href={"#"}>
                            <img src="/lang2.png" width={"40px"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
