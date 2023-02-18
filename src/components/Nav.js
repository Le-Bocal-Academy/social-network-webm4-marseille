import { NavLink, useLoaderData } from 'react-router-dom';

function Nav() {
  const authUser = useLoaderData();
  const defaultStyle = {
    height: '100%',
    display: 'block',
    padding: '0 16px',
  };
  const activeStyle = {
    ...defaultStyle,
    backgroundColor: '#1677ff',
    color: 'white'
  };

  const items = [{ key: '/', label: "Home" }].concat(authUser ? [
    { key: '/profile', label: "Profile" },
    { key: '/logout', label: "Log out" },
  ] : [
    { key: '/login', label: "Log in" },
    { key: '/signin', label: "Sign up" },
  ]);

  return (
    <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', padding: 0, margin: 0 }}>
      {items.map(item => (
      <li key={item.key} style={{ height: '100%' }}>
        <NavLink style={({ isActive }) => isActive ? activeStyle : defaultStyle} to={item.key}>{item.label}</NavLink>
      </li>
      ))}
    </ul>

  )
}

export default Nav;