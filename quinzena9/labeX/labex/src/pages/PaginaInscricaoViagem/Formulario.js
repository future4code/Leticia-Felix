import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[50],
    },
    secondary: {
      main: pink[50],
    },
  },
});

const TextFields = () => {
  const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
  const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
  const helperTextStyles = roundTextFieldStylesHook.useHelperText();
  return (
    <div>
      <TextField
        label={'Nome'}
        placeholder={'Nome'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
        FormHelperTextProps={{ classes: helperTextStyles }}
      />
      <div />
      
      <TextField
        color={'secondary'}
        label={'Idade'}
        placeholder={'Ex: 20'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        color={'secondary'}
        label={'Por que quer viajar?'}
        placeholder={'Por que quer viajar?'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        color={'secondary'}
        label={'Profissão'}
        placeholder={'Profissão'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        color={'secondary'}
        label={'País'}
        placeholder={'País'}
        margin={'normal'}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      /> 
      <div />
    </div>
   
  );
};

const Formulario = () => (
  <ThemeProvider theme={theme}>
    <TextFields />
    <button>Enviar Inscrição</button>
  </ThemeProvider>
);

export default Formulario;