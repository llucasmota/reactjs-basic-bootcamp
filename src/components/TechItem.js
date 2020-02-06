import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
/**
 * defaultProps define um valor standard caso um TechItem não possua um valor
 */
TechItem.defaultProps = {
  tech: "Oculto"
};

export default TechItem;
