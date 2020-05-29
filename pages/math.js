import { connect } from "react-redux";
import { add, minus, reapplyCount } from "../store/actions/fooActions";
import { getCookie, setCookie } from "../util/cookieHelper";
import Layout from "../components/Layout";

export const Math = ({ addition, substraction, count }) => {
  return (
    <Layout>
      <div>
        <h2>Counter: {count}</h2>
        {/*<h3>Cookie value: {getCookie("count")}</h3>*/}
        <button onClick={addition}>add</button>
        <button onClick={substraction}>substract</button>
      </div>
    </Layout>
  );
};

const mapState = (state) => ({
  count: state.foo.count,
});

const mapDispatch = (dispatch) => ({
  addition: () => dispatch(add()),
  substraction: () => dispatch(minus()),
});
Math.getInitialProps = (ctx) => {
  if (ctx.req) {
    console.log("from math");
    console.log(ctx.req.cookies.count);
    ctx.store.dispatch(reapplyCount(ctx.req.cookies.count));
  }
};
export default connect(mapState, mapDispatch)(Math);
