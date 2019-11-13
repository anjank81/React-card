import { getCard } from "../action/card.action";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../component/Card";

const mapDispatchToProps = dispatch => {
  return {
    getCard: () => {
      dispatch(getCard());
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
