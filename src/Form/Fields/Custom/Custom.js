const Custom = ({ id, component, ...props }) => {
  return component({ id, ...props })
}

export default Custom
