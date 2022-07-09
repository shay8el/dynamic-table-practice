const HighlightedText = ({value, search}) => {
    const shouldShowHighlight = search && search !== '' && value.indexOf(search) > -1
    let renderedParts
    if (shouldShowHighlight){
      const parts = shouldShowHighlight && value.split(search)
      renderedParts = parts.map((part, index) => (
      <span key={index}>
      <span>{part}</span>
      {(index < parts.length -1) && <b>{search}</b>}
      </span>))
    }
    return shouldShowHighlight ? renderedParts : <span>{value}</span>;
  }
  export default HighlightedText;