interface IProps {}

function Header(props: IProps) {
  return (
    <div className='h-[var(--layout-header-height)] bg-blue-400'>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
