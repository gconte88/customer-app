import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { Prompt } from "react-router-dom";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";
import CustomersActions from "./../components/CustomersActions";

const isNumber = value => isNaN(Number(value)) && " Field must be numeric";
const validate = values => {
  const error = {};

  if (!values.name) {
    error.name = "Name is Required";
  }

  if (!values.dni) {
    error.dni = "Dni is Required";
  }

  if (values.dni) {
    error.dni = isNumber(values.dni);
  }

  if (!values.age) {
    error.age = "Age is Required";
  }

  if (values.age) {
    error.age = isNumber(values.age);
  }

  return error;
};

const toNumber = value => value && Number(value);

class CustomerEdit extends Component {
  componentDidMount() {
    if (this.txt) {
      this.txt.focus();
    }
  }

  renderField = ({ input, meta, type, label, name, withFocus }) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...input}
        type={!type ? "text" : type}
        ref={withFocus && (txt => (this.txt = txt))}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );

  render() {
    const {
      handleSubmit,
      submitting,
      onBack,
      pristine,
      submitSuccedded
    } = this.props;

    return (
      <div>
        <h2>Client Edition</h2>
        <form onSubmit={handleSubmit}>
          <Field
            withFocus
            name="name"
            label="Name: "
            component={this.renderField}
            type="text"
          />
          <Field
            name="dni"
            label="Dni: "
            component={this.renderField}
            type="text"
          />

          <Field
            name="age"
            label="Age: "
            component={this.renderField}
            type="number"
            parse={toNumber}
          />
          <CustomersActions>
            <button type="submit" disabled={pristine || submitting}>
              Ok
            </button>
            <button type="button" disabled={submitting} onClick={onBack}>
              Cancel
            </button>
            <Prompt
              when={!pristine && !submitSuccedded}
              message="Are you sure?"
            />
          </CustomersActions>
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({
  form: "CustomerEdit",
  validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
