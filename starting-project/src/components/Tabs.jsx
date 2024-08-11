export default function Tabs({ children, buttons, container = "menu" }) {
  const Container = container;
  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
}
