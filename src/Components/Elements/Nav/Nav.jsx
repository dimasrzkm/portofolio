const Nav = (props) => {
  const { classname, children } = props;
  return (
    <div className={`${classname}`}>
      {children}
    </div>
  );
};


export default Nav;
