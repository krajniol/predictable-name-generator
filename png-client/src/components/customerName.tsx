import * as React from 'react';
import { generatePredictableName } from 'utils';

type Props = {
  id?: string;
}

export class CustomerName extends React.Component<Props> {

  render() {
    if (!this.props.id) { return '-'; }

    return (
      <strong>{generatePredictableName(this.props.id)}</strong>
    );
  }
}
