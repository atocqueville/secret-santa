import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#2196f3',
      },
    },

    typography: {
        fontFamily: 'Roboto'
    },

    overrides: {
      MuiSelect: {
        outlined: {
          minWidth: '60px'
        },
        iconOutlined: {
          right: 2
        }
      }
    }
});