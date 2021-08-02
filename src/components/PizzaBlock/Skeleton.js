import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={540}
      viewBox='0 0 280 540'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='140' cy='140' r='120' />
      <rect x='0' y='291' rx='3' ry='3' width='280' height='26' />
      <rect x='0' y='326' rx='6' ry='6' width='280' height='84' />
      <rect x='0' y='422' rx='3' ry='3' width='95' height='31' />
      <rect x='126' y='420' rx='15' ry='15' width='150' height='35' />
    </ContentLoader>
  );
}

export default Skeleton;
