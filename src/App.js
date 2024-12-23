import { Button } from "./components/Button";
import Accordion from "./components/Accordion/Accordion";
import { Input } from "./components/Input/Input";
import "./index.css"

function App() {
  return <div>
    {/* Primary кнопки */}
    <Button size="lg" variant="primary">Lg, primary</Button>
    <Button size="md" variant="primary">Md, primary</Button>
    <Button size="sm" variant="primary">Sm, primary</Button>

    {/* Bordered кнопки */}
    <Button size="lg" variant="bordered">Lg, bordered</Button>
    <Button size="md" variant="bordered">Md, bordered</Button>
    <Button size="sm" variant="bordered">Sm, bordered</Button>

    {/* Disabled кнопка */}
    <Button size="md" variant="primary" disabled>Hover</Button>

    {/* Кнопка с onClick */}
    <Button size="md" variant="primary" onClick={() => alert("Button clicked!")}>Hover</Button>


    {/* Обычное поле */}
    <Input label="Name" value={value} onChange={(e) => setValue(e.target.value)}/>

    {/* Поле с эффектом фокуса */}
    <Input label="Name" placeholder="Name" value="Focus" onChange={() => {}} />

    {/* Поле в состоянии Danger */}
    <Input label="Name" placeholder="Danger" danger value="Danger" onChange={() => {}}/>



    <Accordion title="Accordion 1" defaultOpen>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </Accordion>

    <Accordion title="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </Accordion>
  </div>;
}

export default App;
