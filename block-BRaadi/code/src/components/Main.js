import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundary from "./ErrorBoundary";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <SectionOne />
        <SectionTwo />
        <Location />
      </div>
    </section>
  );
}

export default Main;
