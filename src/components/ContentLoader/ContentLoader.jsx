import { Hourglass } from 'react-loader-spinner';

const ContentLoader = () => (
  <Hourglass
    visible={true}
    height="60"
    width="60"
    ariaLabel="hourglass-loading"
    wrapperStyle={{ position: 'absolute', top: '50%', left: '30%',  transform: 'translate(-50%, -50%)' }}
    wrapperClass=""
    colors={['#f6d9b1', '#eca541']}
  />
);

export default ContentLoader;