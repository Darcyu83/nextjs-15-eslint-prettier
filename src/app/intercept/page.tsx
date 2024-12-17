import Link from 'next/link';

interface IProps {}

function Intercept({}: IProps) {
  return (
    <div style={{}}>
      <h1>Intercept Routes</h1>

      <Link
        className='card underline'
        key={101}
        href={`intercept/photos/${101}`}
        passHref
      >
        ID: {101}
      </Link>
    </div>
  );
}

export default Intercept;
