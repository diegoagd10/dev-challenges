import './App.css'
import { Button } from './Button'

function App() {
  return (
    <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <Button text="Default" startIcon="local_grocery_store" />
      <Button text="Default" endIcon="local_grocery_store" />
      <Button text="Default" size="sm" />
      <Button text="Default" size="md" />
      <Button text="Default" size="lg" />
      <Button text="Default" color="default" />

      <h1>Buttons</h1>

      <Button text="Primary" color="primary" />
      <Button text="Secondary" color="secondary" />
      <Button text="Danger" color="danger" />

      <Button text="Primary" color="primary" variant="outline" />
      <Button text="Secondary" color="secondary" variant="outline" />
      <Button text="Danger" color="danger" variant="outline" />

      <Button text="Primary" color="primary" variant="text" />
      <Button text="Secondary" color="secondary" variant="text" />
      <Button text="Danger" color="danger" variant="text" />

      <h1>Disabled Buttons</h1>

      <Button disabled text="Default" />
      <Button disabled text="Primary" color="primary" />
      <Button disabled text="Secondary" color="secondary" />
      <Button disabled text="Danger" color="danger" />

      <Button disabled text="Default" variant="outline" />
      <Button disabled text="Primary" color="primary" variant="outline" />
      <Button disabled text="Secondary" color="secondary" variant="outline" />
      <Button disabled text="Danger" color="danger" variant="outline" />

      <Button disabled text="Default" variant="text" />
      <Button disabled text="Primary" color="primary" variant="text" />
      <Button disabled text="Secondary" color="secondary" variant="text" />
      <Button disabled text="Danger" color="danger" variant="text" />
    </div>
  )
}

export default App
