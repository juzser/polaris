import { AppProvider, Pagination } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

function Example() {
  return (
    <AppProvider i18n={translations}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"
      />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <div style={{ height: "100px" }}>
          <Pagination
            hasPrevious
            previousKeys={[74]}
            previousTooltip="j"
            onPrevious={() => {
              console.log("Previous");
            }}
            hasNext
            nextKeys={[75]}
            nextTooltip="k"
            onNext={() => {
              console.log("Next");
            }}
          />
        </div>
      </div>
    </AppProvider>
  );
}

export default Example;
