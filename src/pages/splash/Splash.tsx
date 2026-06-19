import React, { Component } from "react";
import "./Splash.scss";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo";
import { ThemeProps } from "../../types/portfolio";

interface SplashState {
  redirect: boolean;
}

function AnimatedSplash(props: ThemeProps) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component<ThemeProps, SplashState> {
  private id: ReturnType<typeof setTimeout> | null = null;
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/home" replace />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
