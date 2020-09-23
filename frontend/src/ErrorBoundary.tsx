import * as React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { error: null };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error });
    console.log(error); // tslint:disable-line
  }

  public render() {
    return this.props.children;
  }
}
