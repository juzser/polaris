import { AppProvider, TextContainer,Heading } from "@shopify/polaris";

import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <TextContainer>
  <Heading>Install the Shopify POS App</Heading>
  <p>
    Shopify POS is the easiest way to sell your products in person. Available
    for iPad, iPhone, and Android.
  </p>
</TextContainer>
      </div>
    </AppProvider>
  );
}

export default Example;
