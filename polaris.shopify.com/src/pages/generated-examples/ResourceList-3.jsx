import { AppProvider, Card,ResourceList,Avatar,ResourceItem,TextStyle } from "@shopify/polaris";
import { useState } from "react";

import translations from '@shopify/polaris/locales/en.json';
function ResourceListWithSelectionExample() {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const items = [
    {
      id: 101,
      url: 'customers/341',
      name: 'Mae Jemison',
      location: 'Decatur, USA',
    },
    {
      id: 201,
      url: 'customers/256',
      name: 'Ellen Ochoa',
      location: 'Los Angeles, USA',
    },
  ];

  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={items}
        renderItem={renderItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        selectable
      />
    </Card>
  );

  function renderItem(item) {
    const {id, url, name, location} = item;
    const media = <Avatar customer size="medium" name={name} />;

    return (
      <ResourceItem
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceItem>
    );
  }
}

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
        <ResourceListWithSelectionExample />
      </div>
    </AppProvider>
  );
}

export default Example;
