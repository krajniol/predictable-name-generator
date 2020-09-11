import * as React from 'react';

type Props = {
    id?: string,
    onCustomerChange: any
}

export class CustomerInput extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onCustomerChange(e.target.value);
  }

  render() {
    const id = this.props.id;

    return (
      <fieldset>
        <legend>Enter customer id:</legend>
        <input value={id}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}
