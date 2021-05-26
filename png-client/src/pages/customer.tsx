import React from 'react';
import { CustomerInput, CustomerName } from 'components';

type Props = {};

type State = {
    id: string
}

export class Customer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.state = { id: '5ee9ca57a045ed407c77759d' };
  }

  handleCustomerChange(id: string) {
    this.setState({ id: id });
  }

  render() {
    const id = this.state.id;

    return (
      <div>
        <CustomerInput id={id} onCustomerChange={this.handleCustomerChange} />
        <CustomerName id={id} />
      </div>
    );
  }
}
