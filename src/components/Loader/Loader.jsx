import { Hourglass } from 'react-loader-spinner';

const Loader = () => (
  <Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{ margin: '26px 96px' }}
    wrapperClass=""
    colors={['#f6d9b1', '#eca541']}
  />
);

export default Loader;
