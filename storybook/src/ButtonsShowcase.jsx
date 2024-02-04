import { Button } from "./Button";
import { ComponentCard } from "./ComponentCard";

export function ButtonsShowcase() {
  return (
    <section className="sb-button-showcase-content">
      <ComponentCard code="<Button />">
        <Button text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code='<Button variant="outline" />'>
        <Button variant="outline" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button variant="outline" text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code='<Button variant="text" />'>
        <Button variant="text" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button variant="text" text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code="<Button disableShadow />">
        <Button disableShadow text="Default" />
      </ComponentCard>

      <ComponentCard code="<Button disabled />">
        <Button disabled text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button variant="text" disabled />'>
        <Button variant="text" disabled text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button startIcon="local_grocery_store" />'>
        <Button startIcon="local_grocery_store" text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button endIcon="local_grocery_store" />'>
        <Button endIcon="local_grocery_store" text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button size="sm" />'>
        <Button size="sm" text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button size="md" />'>
        <Button size="md" text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button size="lg" />'>
        <Button size="lg" text="Default" />
      </ComponentCard>

      <ComponentCard code='<Button primary="default" />'>
        <Button color="default" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button color="default" text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code='<Button primary="primary" />'>
        <Button color="primary" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button color="primary" text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code='<Button primary="secondary" />'>
        <Button color="secondary" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button color="secondary" text="Default" showHoverStyle />
      </ComponentCard>

      <ComponentCard code='<Button primary="danger" />'>
        <Button color="danger" text="Default" />
      </ComponentCard>

      <ComponentCard code="&:hover, &:focus">
        <Button color="danger" text="Default" showHoverStyle />
      </ComponentCard>
    </section>
  );
}
