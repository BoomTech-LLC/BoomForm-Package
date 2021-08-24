const Custom = ({ id, component, label, classnameprefix, ...props }) => {
  return component({ id, ...props })
}

export default Custom
