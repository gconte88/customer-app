import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";

const CustomersListItem = ({ customers, urlPath }) => {
  return (
    <div className="customers-list">
      {customers.map(c => (
        <CustomerListItem
          key={c.dni}
          dni={c.dni}
          name={c.name}
          editAction={"Edit"}
          delAction={"Delete"}
          urlPath={urlPath}
        />
      ))}
    </div>
  );
};

CustomersListItem.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomersListItem;
