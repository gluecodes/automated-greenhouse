export const componentDidMount = () => {
  fetch('/api/getUsername')
    .then(res => res.json())
    .then(user => this.setState({ username: user.username }));
}