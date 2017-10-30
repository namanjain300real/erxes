import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Textarea, FormLabel, Radio, Checkbox } from './styles';

const propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  defaultValue: PropTypes.string,
  defaultChecked: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  round: PropTypes.bool,
  componentClass: PropTypes.oneOf([
    'select',
    'radio',
    'checkbox',
    'textarea',
    'input'
  ])
};

const defaultProps = {
  componentClass: 'input',
  required: false,
  defaultChecked: false
};

const renderElement = (Element, attributes, type, child) => {
  return (
    <FormLabel>
      <Element {...attributes} type={type} />
      <span>{child}</span>
    </FormLabel>
  );
};

class FormControl extends React.Component {
  render() {
    const props = this.props;
    const childNode = props.children;
    const elementType = props.componentClass;

    const attributes = {
      onChange: props.onChange,
      onClick: props.onClick,
      defaultValue: props.defaultValue,
      defaultChecked: props.defaultChecked,
      placeholder: props.placeholder,
      type: props.type,
      name: props.name,
      round: props.round,
      required: props.required
    };

    if (elementType === 'select') {
      return <Select {...attributes}>{childNode}</Select>;
    }

    if (elementType === 'radio') {
      return renderElement(Radio, attributes, elementType, childNode);
    }

    if (elementType === 'checkbox') {
      return renderElement(Checkbox, attributes, elementType, childNode);
    }

    if (elementType === 'textarea') {
      return <Textarea {...attributes} />;
    }

    return <Input {...attributes} />;
  }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;
