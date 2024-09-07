export interface Theme {
  palette: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    action: {
      active: string;
      hover: string;
      selected: string;
      disabled: string;
      disabledBackground: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    button: React.CSSProperties;
    caption: React.CSSProperties;
    overline: React.CSSProperties;
  };
  spacing: (factor: number) => string | number;
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    up: (key: string) => string;
    down: (key: string) => string;
    between: (start: string, end: string) => string;
    only: (key: string) => string;
  };
  shape: {
    borderRadius: number;
  };
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  };
  zIndex: {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  direction: 'ltr' | 'rtl';
  components: {
    [key: string]: {
      defaultProps?: object;
      styleOverrides?: object;
      variants?: object[];
    };
  };
  shadows: string[];
}
