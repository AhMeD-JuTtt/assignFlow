"use client"
export default function UpArrowBtn() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
  return (
    <div className="btnUpArrow" onClick={scrollToTop}>
        <img src="/upArrow.svg"/>
    </div>
  )
}
