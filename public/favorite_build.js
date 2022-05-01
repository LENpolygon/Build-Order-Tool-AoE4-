'use strict';

const e = React.createElement;

class FavoriteBuildButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Coming Soon.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Favorite Builds'
    );
  }
}

const domContainer = document.querySelector('#favorite_build_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FavoriteBuildButton));