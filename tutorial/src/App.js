import "./App.css";
import Header from "./Components/Header/Header";
import OutputtingDynamicContent from "./Components/OutputtingDynamicContent/OutputtingDynamicContent";
import Props from "./Components/Props/Props";
import { CORE_CONCEPT } from "./Components/Props/Props";
import Card from "./Components/Props/Card";
import TabButtons from "./Components/Props/TabButtons";
import { useState } from "react";
import Ravika from "./Ravika";

function App() {
  const [SelectedButtonTopic, SetSelectedButtonTopic]= useState('Please click on button');
 const[DiscountCoupon, SetDiscountCoupon]=useState();

  function handleClick(SelectedButton) {
    SetSelectedButtonTopic(SelectedButton)
    console.log(SelectedButton);
  }
  function discount(){
    SetDiscountCoupon()

  }
  return (
    <>
      <header>
        <Header />
        <OutputtingDynamicContent />
      </header>
      <main>
        <section id="core-concept">
          <h1> Core conecpet</h1>
          <ul>
            <Props {...CORE_CONCEPT[0]} />
            <Props
              title={CORE_CONCEPT[1].title}
              description={CORE_CONCEPT[1].description}
            />
            <Props {...CORE_CONCEPT[2]} />
            <Props
              title="State"
              description="React-managed data which when changed."
            />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButtons onSelect={() => handleClick("Component")}>
              {" "}
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleClick("JSX")}> JSX</TabButtons>
            <TabButtons onSelect={() => handleClick("Props")}>
              {" "}
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleClick("ravika")}>
              {" "}
              State
            </TabButtons>
          </menu>
          {SelectedButtonTopic}
        </section>
        <section>
          <div id="app">
            <h1>Available Experts</h1>
            <Card name="Anthony Blake">
              <p>
                Blake is a professor of Computer Science at the University of
                Illinois.
              </p>
              <p>
                <a href="mailto:blake@example.com">Email Anthony</a>
              </p>
            </Card>

            <Card name="Maria Miles">
              <p>
                Maria is a professor of Computer Science at the University of
                Illinois.
              </p>
              <p>
                <a href="mailto:blake@example.com">Email Maria</a>
              </p>
            </Card>
          </div>
        </section>
       <section>
       <div>
            <p data-testid="price">$100</p>
            <button  onSelect={() =>  ("ravika")}>Apply Discount</button>
        </div>
       </section>
      </main>
    </>
  );
}

export default App;
