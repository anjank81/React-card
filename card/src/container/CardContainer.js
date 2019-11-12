import { getCard } from "../action/card.action";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../component/Card";

const mapDispatchToProps = dispatch => {
  console.log("map dispatch to props");
  return {
    getCard: () => {
      dispatch(getCard());
    }
  };
};
const mapStateToProps = state => {
  console.log("map state to props");
  return {
    userData: state
  };
};

const CardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card)
);

export default CardContainer;
