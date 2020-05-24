import Link from "next/link";
//import Head from "next/head";
import { connect } from "react-redux";
import { deauthenticate } from "../store/actions/authActions";

const Layout = ({ children, title, isAuth, signOut }) => (
  <div>
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {!isAuth && (
          <li>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
        )}
        {isAuth && (
          <li onClick={signOut}>
            <a>Sign out</a>
          </li>
        )}
        <li>
          <Link href="/whoami">
            <a>Who Am I</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className="has-text-centered">{children}</div>
  </div>
);
const mapState = (state) => ({
  isAuth: state.auth.token,
});
const mapDispatch = (dispatch) => ({
  signOut: () => dispatch(deauthenticate()),
});
export default connect(mapState, mapDispatch)(Layout);
