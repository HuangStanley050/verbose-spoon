import { connect } from "react-redux";
import { add, minus } from "../store/actions/fooActions";
import Layout from "../components/Layout";

export const Math = ({ addition, substraction, count }) => {
  return (
    <div>
      <h2>Counter: {JSON.stringify(count)}</h2>
      <button onClick={() => addition(count)}>add</button>
      <button onClick={() => substraction(count)}>substract</button>
    </div>
  );
};

const mapState = (state) => ({
  count: state.foo.count,
});

const mapDispatch = (dispatch) => ({
  addition: (count) => dispatch(add(count)),
  substraction: (count) => dispatch(minus(count)),
});

export default connect(mapState, mapDispatch)(Math);
