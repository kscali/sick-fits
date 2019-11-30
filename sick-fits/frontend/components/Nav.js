import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export const Nav = () => {
  return (
    <NavStyles>
      <Link href="/items">
        <a>Items</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/me">
        <a>Account</a>
      </Link>
    </NavStyles>
  )
}
