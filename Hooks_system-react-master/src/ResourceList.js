import React from "react";

import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  // state = { resources: [] };
  // async componentDidMount() {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //   );
  //   this.setState({ resources: response.data });
  // }

  // async componentDidUpdate(prevProps) {
  //   if (prevProps.resource !== this.props.resource) {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //     );
  //     this.setState({ resources: response.data });
  //   }
  // }

  // const [resources, setResources] = useState([]);
  // const fetchResource = async resource => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource}`
  //   );
  //   setResources(response.data);
  // };

  // render() {

  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
  // }
};

export default ResourceList;
