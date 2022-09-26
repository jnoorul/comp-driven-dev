
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
(Story, {kind}) => {
  const isPages = kind.startsWith('Pages/');
  const style = isPages ? {} : {padding: '16px'};
  return(
    <div style={style}> 
      <Story />
    </div>);
}
];