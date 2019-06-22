import React from "react";
import PropTypes from "prop-types";
import CustomersActions from "./CustomersActions";

const CustomerData = ({
  id,
  name,
  dni,
  age,
  onBack,
  isDeleteAllow,
  onDelete
}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Client Data</h2>
        <div>
          <strong>
            Name: <i>{name}</i>
          </strong>
        </div>
        <div>
          <strong>
            Document Number: <i>{dni}</i>
          </strong>
        </div>
        <div>
          <strong>
            Age: <i>{age}</i>
          </strong>
        </div>
      </div>
      <CustomersActions>
        <button onClick={onBack}>Back</button>
        {isDeleteAllow && <button onClick={() => onDelete(id)}>Delete</button>}
      </CustomersActions>
    </div>
  );
};

CustomerData.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isDeleteAllow: PropTypes.bool
};

export default CustomerData;
